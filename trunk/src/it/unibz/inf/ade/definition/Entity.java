package it.unibz.inf.ade.definition;

import java.util.ArrayList;
import java.util.TreeSet;

public class Entity implements Comparable {
	private String URL;
	private TreeSet<String> aliases = new TreeSet<String>();
	private TreeSet<String> appearingAliasesInComment = new TreeSet<String>();

	public TreeSet<String> getAppearingAliasesInComment() {
		return appearingAliasesInComment;
	}

	public Entity(String URL) {
		this.URL = URL;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((URL == null) ? 0 : URL.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Entity other = (Entity) obj;
		if (URL == null) {
			if (other.URL != null)
				return false;
		} else if (!URL.equals(other.URL))
			return false;
		return true;
	}

	public void setAppearingAliasesInArticle(
			TreeSet<String> appearingAliasesInArticle) {
		this.appearingAliasesInComment = appearingAliasesInArticle;
	}

	private ArrayList<Aspect> aspects = new ArrayList<Aspect>();
	private ArrayList<Integer> aspectsAppearances = new ArrayList<Integer>();

	public String getURL() {
		return URL;
	}

	public void setURL(String uRL) {
		URL = uRL;
	}

	public TreeSet<String> getAliases() {
		return aliases;
	}

	public void setAliases(TreeSet<String> aliases) {
		this.aliases = aliases;
	}

	public ArrayList<Aspect> getAspects() {
		return aspects;
	}

	public void setAspects(ArrayList<Aspect> aspects) {
		this.aspects = aspects;
	}

	public ArrayList<Integer> getAspectsAppearances() {
		return aspectsAppearances;
	}

	public void setAspectsAppearances(ArrayList<Integer> aspectsAppearances) {
		this.aspectsAppearances = aspectsAppearances;
	}

	@Override
	public int compareTo(Object obj) {
		Entity other = (Entity) obj;
		return this.URL.compareTo(other.URL);
	}

}
