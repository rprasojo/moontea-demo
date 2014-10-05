package it.unibz.inf.ade.extractor;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
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
	public void extractComment() {
		zemantaExtractComment();
	}

	private void zemantaExtractComment() {
		if (useLocal)
			zemantaLocalCrawl();
		else
			callZemantaCommentExtractor();
	}

	private void callZemantaCommentExtractor() {
		int numberOfComment = 1;
		StringBuilder sb = new StringBuilder();
		for (Comment c : this.reader.getArticle().getListOfComments()) {
			sb.append("Comment " + numberOfComment + "\n{\n");
			sb.append(callZemanta(c.getText(), c));
			sb.append("}\n");
			numberOfComment++;
		}
		if (this.reader instanceof LocalReader) {
			try {
				writeLocalResult(sb);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}

	private void writeLocalResult(StringBuilder sb) throws IOException {
		switch (this.reader.getSourceID()) {
		case LocalReader.SMALL_DATASET:
			BufferedWriter bw;
			String file = "";
			if (this.reader.getArticle().getListOfComments().get(0).getMode() == Comment.ORIGINAL) {
				file = "result/small/original/entity/zemanta/"
						+ this.reader.getSourceName();
			} else if (this.reader.getArticle().getListOfComments().get(0).getMode() == Comment.EXTENDED) {
				file = "result/small/extended/entity/zemanta/"
						+ this.reader.getSourceName();
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
						url = l.targets.get(0).url;
						System.out.println("Entity " + anchor
								+ " doesn't have a url from wikipedia");
						break;
					}
				}

				if(url.endsWith("/"))
					url = url.substring(0, url.length()-1);
				String uri = SPARQLQueryPoster.retrieveURIfromWikipedia(url, anchor,
						SPARQLQueryPoster.DBPEDIA);
				Set<String> result = SPARQLQueryPoster.retrieveEntityAliases(
						uri, SPARQLQueryPoster.DBPEDIA);
				Set<String> types = SPARQLQueryPoster.retrieveEntityType(uri,
						SPARQLQueryPoster.DBPEDIA);

				Entity e = new Entity(uri);
				e.setAnchorName(anchor);
				e.getTypes().addAll(types);
				for (String s : types) {
					if (s.toLowerCase().contains("person")) {
						e.setPerson(true);
					}
				}

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
					addPartOfPersonNames(e, alias);
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
				sb.append("\t" + anchor + " " + newCount + " * "
						+ e.isAPerson() + " * " + uri + "\n\t{\n\t}\n");
			}

		}
		return sb.toString();
	}

	@Override
	public void extractTopic() {
		callZemanta(this.reader.getArticle().getTopic()
				.getText(), this.reader.getArticle().getTopic());
	}

}
