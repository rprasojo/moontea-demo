package it.unibz.inf.ade.extractor;

import it.unibz.inf.ade.reader.Reader;
import it.unibz.inf.ade.reader.LocalReader;

public abstract class EntityExtractor implements Extractor {
	protected Reader reader;
	protected Boolean useLocal = false;
	
	public EntityExtractor(Reader reader, boolean useLocal) {
		this.reader = reader;
		if(reader instanceof LocalReader && useLocal) 
			this.useLocal = true;
	}
	
	public abstract void extractComment();
	
	public abstract void extractTopic();
	
	public void extract() { extractComment(); extractTopic(); }
	
	protected int countSubstring(String subStr, String str) {
		return (str.length() - str.replace(subStr, "").length())
				/ subStr.length();
	}
}
