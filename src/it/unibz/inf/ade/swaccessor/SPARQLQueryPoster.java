package it.unibz.inf.ade.swaccessor;

import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

import com.hp.hpl.jena.query.QueryExecution;
import com.hp.hpl.jena.query.QueryExecutionFactory;
import com.hp.hpl.jena.query.QuerySolution;
import com.hp.hpl.jena.query.ResultSet;
import com.hp.hpl.jena.rdf.model.RDFNode;

public class SPARQLQueryPoster {

	public static final String DBPEDIA = "http://dbpedia.org/sparql";

	private static final String FOAF_PREFIX = "prefix foaf:  <http://xmlns.com/foaf/0.1/>\n";
	private static final String DBPEDIA_OWL_PREFIX = "prefix dbpedia-owl: <http://dbpedia.org/ontology/>\n";
	private static final String RDFS_PREFIX = "prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n";
	private static final String DBPPROP_PREFIX = "prefix dbpprop: <http://dbpedia.org/property/>\n";
	private static final String RDF_PREFIX = "prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n";

	private static final String VAR_ALIAS = "alias";
	private static final String VAR_ENTITY_TYPE = "type";
	private static final String VAR_ENTITY_URI = "uri";

	public static Set<String> executeSelectQuery(String query,
			String endpointURL, String variableName) {
		String service = endpointURL;
		QueryExecution qe = null;
		try {
		qe = QueryExecutionFactory.sparqlService(service, query);
		} catch(Exception e) {
			return new TreeSet<String>();
		}
		ResultSet results = qe.execSelect();
		Set<String> res = new TreeSet<String>();
		for (; results.hasNext();) {
			QuerySolution soln = results.nextSolution();
			RDFNode x = soln.get(variableName); // Get a result variable by
												// name.
			res.add(x.toString().replace("@en", "")
					.replace(" (disambiguation)", ""));
		}
		return res;
	}

	public static Set<String> retrieveEntityType(String url, String endpointURL) {
		return executeSelectQuery(createEntityTypeQuery(url), endpointURL,
				VAR_ENTITY_TYPE);
	}

	public static Set<String> retrieveEntityAliases(String url,
			String endpointURL) {
		return executeSelectQuery(createEntityAliasesQuery(url), endpointURL,
				VAR_ALIAS);
	}

	private static String createEntityAliasesQuery(String uri) {
		String prefix = FOAF_PREFIX + DBPEDIA_OWL_PREFIX + RDFS_PREFIX
				+ DBPPROP_PREFIX;
		String query = prefix + "select distinct ?" + VAR_ALIAS
				+ " where { { <" + uri + "> rdfs:label ?" + VAR_ALIAS
				+ " . } UNION { ?x dbpedia-owl:wikiPageDisambiguates <" + uri
				+ "> . ?x rdfs:label ?" + VAR_ALIAS + " . } UNION { <" + uri
				+ "> dbpedia-owl:longName ?" + VAR_ALIAS + " . } UNION { <"
				+ uri + "> dbpprop:countryCode ?" + VAR_ALIAS
				+ " . } UNION { <" + uri + "> dbpedia-owl:longName ?"
				+ VAR_ALIAS + " . } UNION { <" + uri + "> dbpprop:commonName ?"
				+ VAR_ALIAS + " . } UNION { <" + uri
				+ "> dbpprop:conventionalLongName ?" + VAR_ALIAS
				+ " . } UNION { <" + uri + "> foaf:name ?" + VAR_ALIAS
				+ " . } UNION { <" + uri + "> dbpprop:linkingName ?"
				+ VAR_ALIAS + " . } UNION { <" + uri + "> dbpprop:name ?"
				+ VAR_ALIAS + " . } UNION { <" + uri
				+ "> dbpedia-owl:birthName ?" + VAR_ALIAS + " . } UNION { <"
				+ uri + "> dbpprop:alternativeNames ?" + VAR_ALIAS
				+ " . } UNION { <" + uri + "> dbpprop:name ?" + VAR_ALIAS
				+ " . } UNION { <" + uri + "> dbpprop:birthname ?" + VAR_ALIAS
				+ " . } UNION { <" + uri + "> foaf:name ?" + VAR_ALIAS
				+ " . }  FILTER(LANG(?" + VAR_ALIAS
				+ " ) = \"\" || LANGMATCHES(LANG(?" + VAR_ALIAS
				+ " ), \"en\")) . } LIMIT 100";
		return query;
	}

	private static String createEntityTypeQuery(String uri) {
		String prefix = RDF_PREFIX + FOAF_PREFIX;
		String query = prefix + "select distinct ?" + VAR_ENTITY_TYPE
				+ " where { <" + uri + "> rdf:type ?" + VAR_ENTITY_TYPE + "}";
		return query;
	}

	public static String retrieveURIfromWikipedia(String url, String label,
			String endpointURL) {
		String prefix = FOAF_PREFIX;
		String query = prefix + "select distinct ?" + VAR_ENTITY_URI
				+ " where {?" + VAR_ENTITY_URI + " foaf:isPrimaryTopicOf <"
				+ url + "> }";
		Iterator<String> i = executeSelectQuery(query, endpointURL,
				VAR_ENTITY_URI).iterator();
		if (i.hasNext()) {
			return i.next();
		} else {
			return retrieveURIfromHomePage(url, label, endpointURL);
		}
	}

	private static String retrieveURIfromHomePage(String url, String label,
			String endpointURL) {
		String prefix = FOAF_PREFIX + RDFS_PREFIX;
		String query = prefix + "select distinct ?" + VAR_ENTITY_URI
				+ " where {?" + VAR_ENTITY_URI + " foaf:homepage <" + url
				+ "> . ?" + VAR_ENTITY_URI + " rdfs:label \"" + label
				+ "\"@en}";

		Iterator<String> i = executeSelectQuery(query, endpointURL,
				VAR_ENTITY_URI).iterator();
		if (i.hasNext()) {
			return i.next();
		} else {
			return "";
		}
	}
}
