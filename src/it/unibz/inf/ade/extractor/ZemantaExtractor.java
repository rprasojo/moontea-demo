package it.unibz.inf.ade.extractor;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import com.zemanta.api.Zemanta;
import com.zemanta.api.ZemantaResult;
import com.zemanta.api.suggest.Markup.Link;

import it.unibz.inf.ade.definition.Comment;
import it.unibz.inf.ade.definition.Entity;
import it.unibz.inf.ade.reader.LocalReader;
import it.unibz.inf.ade.reader.Reader;
import it.unibz.inf.ade.swaccessor.SPARQLQueryPoster;

public class ZemantaExtractor extends EntityExtractor {

	private String apiKey;

	public ZemantaExtractor(Reader reader, boolean useLocal, String apiKey) {
		super(reader, useLocal);
		this.apiKey = apiKey;
	}

	@Override
	public void extract() {
		zemantaExtract();
	}

	private void zemantaExtract() {
		if (useLocal)
			zemantaLocalCrawl();
		else
			callZemanta();
	}

	private void callZemanta() {
		int numberOfComment = 1;
		StringBuilder sb = new StringBuilder();
		for (Comment c : this.reader.getArticle().getListOfComments()) {
			sb.append("Comment " + numberOfComment + "\n{\n");
			sb.append(callZemanta(c.getText(), c));
			sb.append("}\n");
			numberOfComment++;
//			break;
		}
		if(this.reader instanceof LocalReader) {
			try {
				writeLocalResult(sb);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

	private void writeLocalResult(StringBuilder sb) throws IOException {
		switch(this.reader.getSourceID()) {
		case LocalReader.SMALL_DATASET:
			BufferedWriter bw;
			String file = "";
			if(this.reader.getArticle().getListOfComments().get(0).getMode() == Comment.ORIGINAL){
				file = "result/small/original/entity/zemanta/" + this.reader.getSourceName();
				System.out.println(file);
			}
			bw = new BufferedWriter(new FileWriter(new File(file)));
			bw.write(sb.toString());
			bw.flush();
			bw.close();
			break;
		}
		
	}

	private void zemantaLocalCrawl() {
		// TODO: just crawl up the resulted file.
	}

	private String callZemanta(String text, Comment c) {
		final String API_SERVICE_URL = "http://api.zemanta.com/services/rest/0.0/";

		HashMap<String, String> parameters = new HashMap<String, String>();
		parameters.put("method", "zemanta.suggest");
		parameters.put("api_key", apiKey);
		parameters.put("text", text);
		parameters.put("format", "xml");

		Zemanta zem = new Zemanta(apiKey, API_SERVICE_URL);

		ZemantaResult zemMarkup = zem.suggestMarkup(text);
		StringBuilder sb = new StringBuilder();
		if (!zemMarkup.isError) {
			for (Link l : zemMarkup.markup.links) {
				String anchor = l.anchor;
				int i = 1;
				String url = "null";
				try {
					url = l.targets.get(0).url;
				} catch (Exception e) {
					System.out.println("Entity " + anchor
							+ " doesn't have a url");
				}
				while (!url.contains("wikipedia")) {
					try {
						url = l.targets.get(i).url;
						i++;
					} catch (Exception e) {
						System.out.println("Entity " + anchor
								+ " doesn't have a url from wikipedia");
						break;
					}
				}

				String q = createEntityAliasesQuery(url);
				Set<String> result = SPARQLQueryPoster.executeSelectQuery(q,
						SPARQLQueryPoster.DBPEDIA);

				Entity e = new Entity(url);
				Object[] aliases = result.toArray();
				int newCount = 0;
				String temp = new String(c.getText());
				newCount += countSubstring(anchor, temp);
				temp = temp.replaceAll(anchor, "");
				// System.out.print(anchor + ": " + newCount + " - "+ url +
				// " ");
				for (int j = 0; j < aliases.length; j++) {
					String alias = (String) aliases[j];
					e.getAliases().add(alias);
					// System.out.print(aliases[j] + " *** ");
					if (alias.length() > 1 && !alias.equalsIgnoreCase(anchor)
							&& temp.contains(alias)) {
						newCount += countSubstring(alias, temp);
						e.getAppearingAliasesInComment().add(alias);
						temp.replaceAll(alias, "");
					}
				}
				c.getEntities().add(e);
				c.getEntityAppearances().add(newCount);
				reader.getArticle().getSetOfEntities().add(e);
				sb.append("\t" + anchor + " " + newCount + "\n\t{\n\t}\n");
			}

		}
		return sb.toString();
	}

	private String createEntityAliasesQuery(String url) {
		String prefix = "prefix foaf:  <http://xmlns.com/foaf/0.1/>\n"
				+ "prefix dbpedia-owl: <http://dbpedia.org/ontology/>\n"
				+ "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n"
				+ "prefix dbpprop: <http://dbpedia.org/property/>\n";
		return prefix
				+ "select distinct ?alias where {?a foaf:isPrimaryTopicOf <"
				+ url
				+ "> . { { ?a rdfs:label ?alias . } UNION { ?x dbpedia-owl:wikiPageDisambiguates ?a . ?x rdfs:label ?alias . } UNION { ?a dbpedia-owl:longName ?alias . } UNION { ?a dbpprop:countryCode ?alias . } UNION { ?a dbpedia-owl:longName ?alias . } UNION { ?a dbpprop:commonName ?alias . } UNION { ?a dbpprop:conventionalLongName ?alias . } UNION { ?a foaf:name ?alias . } UNION { ?a dbpprop:linkingName ?alias . } UNION { ?a dbpprop:name ?alias . } UNION { ?a dbpedia-owl:birthName ?alias . } UNION { ?a dbpprop:alternativeNames ?alias . } UNION { ?a dbpprop:name ?alias . } UNION { ?a dbpprop:birthname ?alias . } UNION { ?a foaf:name ?alias . } } FILTER(LANG(?alias ) = \"\" || LANGMATCHES(LANG(?alias ), \"en\")) . } LIMIT 100";
	}

	private int countSubstring(String subStr, String str) {
		return (str.length() - str.replace(subStr, "").length())
				/ subStr.length();
	}

}
