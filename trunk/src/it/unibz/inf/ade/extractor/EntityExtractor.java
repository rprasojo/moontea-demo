package it.unibz.inf.ade.extractor;

import java.util.Arrays;

import it.unibz.inf.ade.definition.Entity;
import it.unibz.inf.ade.reader.Reader;
import it.unibz.inf.ade.reader.LocalReader;

public abstract class EntityExtractor implements Extractor {
	protected Reader reader;
	protected Boolean useLocal = false;

	public EntityExtractor(Reader reader, boolean useLocal) {
		this.reader = reader;
		if (reader instanceof LocalReader && useLocal)
			this.useLocal = true;
	}

	public abstract void extractComment();

	public abstract void extractTopic();

	public void extract() {
		extractComment();
		extractTopic();
	}

	protected int countSubstring(String subStr, String str) {
		return (str.length() - str.replace(subStr, "").length())
				/ subStr.length();
	}

	protected void addPartOfPersonNames(Entity e, String longName) {
		if (e.isAPerson()) {
			String names = longName.replaceAll(",", " ")
					.replaceAll("\\s+", " ");
			e.getPartOfNames().addAll(Arrays.asList(names.split(" ")));
		}
	}
}
