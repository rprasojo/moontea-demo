package it.unibz.inf.ade.test;

import it.unibz.inf.ade.reader.LocalReader;
import it.unibz.inf.ade.reader.Reader;

public class Main {

	public static void main(String[] args) {
		System.setProperty("wordnet.database.dir", "C:/Users/RadityoEko/Downloads/Compressed/WordNet-3.0/dict/");
		
		Reader localReader = new LocalReader();
		localReader.chooseReadingSource(LocalReader.SMALL_DATASET);
	}

}
