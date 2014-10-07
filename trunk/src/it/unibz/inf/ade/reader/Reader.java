package it.unibz.inf.ade.reader;

import it.unibz.inf.ade.definition.Article;

public abstract class Reader {
	public static final int ORIGINAL = 0;
	public static final int CLEANED = 1;
	public static final int EXTENDED = 2;
	public static final int CLEANED_AND_EXTENDED = 3;
	
	protected Article article = new Article();
	protected int sourceID;
	protected String sourceName;

	protected int formOfArticle = EXTENDED;

	public int getFormOfArticle() {
		return formOfArticle;
	}

	public void setFormOfArticle(int formOfArticle) {
		this.formOfArticle = formOfArticle;
	}
	
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
