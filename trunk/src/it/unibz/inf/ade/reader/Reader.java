package it.unibz.inf.ade.reader;

import it.unibz.inf.ade.definition.Article;

public abstract class Reader {
	protected Article article = new Article();
	protected int sourceID;
	protected String sourceName;

	public String getSourceName() {
		return sourceName;
	}

	public void setSourceName(String sourceName) {
		this.sourceName = sourceName;
	}

	public int getSourceID() {
		return sourceID;
	}

	public void setSourceID(int sourceID) {
		this.sourceID = sourceID;
	}

	public abstract void chooseReadingSource(int sourceID);

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}
}
