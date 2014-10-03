package it.unibz.inf.ade.swaccessor;

import java.util.Set;
import java.util.TreeSet;

import com.hp.hpl.jena.query.QueryExecution;
import com.hp.hpl.jena.query.QueryExecutionFactory;
import com.hp.hpl.jena.query.QuerySolution;
import com.hp.hpl.jena.query.ResultSet;
import com.hp.hpl.jena.rdf.model.RDFNode;

public class SPARQLQueryPoster {

	public static final String DBPEDIA = "http://dbpedia.org/sparql";

	public static Set<String> executeSelectQuery(String query,
			String endpointURL) {
		String service = "http://dbpedia.org/sparql";
		QueryExecution qe = QueryExecutionFactory.sparqlService(service, query);
		ResultSet results = qe.execSelect();
		Set<String> res = new TreeSet<String>();
		for (; results.hasNext();) {
			QuerySolution soln = results.nextSolution();
			RDFNode x = soln.get("alias"); // Get a result variable by name.
			res.add(x.toString().replace("@en", "").replace(" (disambiguation)", ""));
		}
		
		return res;
	}
}
