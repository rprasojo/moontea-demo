package it.unibz.inf.ade.test;

import it.unibz.inf.ade.extender.Extender;
import it.unibz.inf.ade.extractor.EntityExtractor;
import it.unibz.inf.ade.extractor.ZemantaExtractor;
import it.unibz.inf.ade.reader.LocalReader;
import it.unibz.inf.ade.reader.Reader;

public class Main {

	public static void main(String[] args) {
		System.setProperty("wordnet.database.dir",
				"C:/Users/RadityoEko/Downloads/Compressed/WordNet-3.0/dict/");

		for (int i = 0; i < 5; i++) {
			Reader localReader = new LocalReader(i);
			localReader.chooseReadingSource(LocalReader.SMALL_DATASET);
			localReader.setFormOfArticle(Reader.EXTENDED);

			EntityExtractor zemantaExtractor = new ZemantaExtractor(
					localReader, false, "thkhkzot2vjtx6dzsamyxhrr");
//			zemantaExtractor.extractTopic();

//			Extender extender = new Extender(localReader);
//			extender.extend();
//			extender.writeExtendedArticleLocally();

			zemantaExtractor.extractComment();
		}
	}

}
