package it.unibz.inf.ade.definition;

import java.util.ArrayList;

public class WordContext {
	private ArrayList<String> wordContextInString = new ArrayList<String>();
	private ArrayList<LimitedWordSynset> wordContextInSynset = new ArrayList<LimitedWordSynset>();
	
	public WordContext(String... inputs) {
		for(String s : inputs) {
			wordContextInString.add(s);
		}
	}
	
}
