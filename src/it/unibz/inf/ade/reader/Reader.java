package it.unibz.inf.ade.reader;

import it.unibz.inf.ade.definition.Article;

public abstract class Reader {
	protected Article article = new Article();
	public abstract void chooseReadingSource(int sourceID);
}
