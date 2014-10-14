package it.unibz.inf.ade.extractor;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.ling.CoreAnnotations.CoNLLDepAnnotation;
import edu.stanford.nlp.ling.CoreAnnotations.NamedEntityTagAnnotation;
import edu.stanford.nlp.ling.CoreAnnotations.PartOfSpeechAnnotation;
import edu.stanford.nlp.ling.CoreAnnotations.SentencesAnnotation;
import edu.stanford.nlp.ling.CoreAnnotations.TextAnnotation;
import edu.stanford.nlp.ling.CoreAnnotations.TokensAnnotation;
import edu.stanford.nlp.pipeline.Annotation;
import edu.stanford.nlp.pipeline.StanfordCoreNLP;
import edu.stanford.nlp.util.CoreMap;
import it.unibz.inf.ade.definition.Comment;
import it.unibz.inf.ade.definition.Entity;
import it.unibz.inf.ade.reader.Reader;
import it.unibz.inf.ade.sentimentanalysis.SentiWordNetDemoCode;

public class AspectExtractor implements Extractor {

	private Reader reader;
	private Properties props = new Properties();
	private StanfordCoreNLP pipeline = new StanfordCoreNLP(props);
	private SentiWordNetDemoCode sentiwordnet;

	public void extract() {
		explicitExtract();
		implicitExtract();
	}

	public AspectExtractor() {
		props.put("annotators",
				"tokenize, ssplit, pos, lemma, ner, parse, dcoref");
		try {
			sentiwordnet = new SentiWordNetDemoCode("lib/sentiwordnet//thesis-demo/lib/sentiwordnet/SentiWordNet_3.0.0_20130122.txt");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void explicitExtract() {

		for (Comment c : reader.getArticle().getListOfComments()) {
			runExplicitExtractionOnSingleComment(c);
		}

	}

	private void runExplicitExtractionOnSingleComment(Comment c) {

		Annotation document = new Annotation(c.getText());
		// run all Annotators on this text
		pipeline.annotate(document);

		// these are all the sentences in this document
		// a CoreMap is essentially a Map that uses class objects as keys
		// and has values with custom types
		List<CoreMap> sentences = document.get(SentencesAnnotation.class);
		for (CoreMap sentence : sentences) {
			// traversing the words in the current sentence
			// a CoreLabel is a CoreMap with additional token-specific
			// methods
			List<Entity> listOfEntities = new ArrayList<Entity>();
			for(Entity e : c.getEntities()) {
				if(sentence.toString().contains(e.getAnchorName()))
					listOfEntities.add(e);
			}
			
			List<String> listOfAdjs = new ArrayList<String>();
			List<String> listOfVerbs = new ArrayList<String>();
			List<String> listOfAdverb = new ArrayList<String>();
			List<String> listOfObjects = new ArrayList<String>();
			
			for (CoreLabel token : sentence.get(TokensAnnotation.class)) {
				// this is the text of the token
				String word = token.get(TextAnnotation.class);
				// this is the POS tag of the token
				String pos = token.get(PartOfSpeechAnnotation.class);
				// this is the NER label of the token
//				String ne = token.get(NamedEntityTagAnnotation.class);

//				CoreMap dep = token.get(CoNLLDepAnnotation.class);

				if (pos.contains("JJ")) {
					listOfAdjs.add(word);
				}

			}
		}
	}

	private void implicitExtract() {
		// TODO Auto-generated method stub

	}

}
