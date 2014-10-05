package it.unibz.inf.ade.definition;

import java.util.ArrayList;
import java.util.Set;
import java.util.TreeSet;
import java.util.UUID;

public class Entity implements Comparable<Entity> {
	static Set<String> setOfUUID = new TreeSet<String>();
	private String URI, anchorName;
	private Set<String> aliases = new TreeSet<String>();
	private Set<String> types = new TreeSet<String>();
	private Set<String> appearingAliasesInComment = new TreeSet<String>();
	private Set<String> partOfNames = new TreeSet<String>();
	private boolean isAPerson = false;
	private String uuid;

	public String getUuid() {
		return uuid;
	}
	public String toString() {
		return URI;
	}
	public Set<String> getAppearingAliasesInComment() {
		return appearingAliasesInComment;
	}

	public Entity(String URI) {
		this.URI = URI;
		uuid = UUID.randomUUID().toString();
		while(setOfUUID.contains(uuid)) {
			uuid = UUID.randomUUID().toString();
		}
		setOfUUID.add(uuid);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((URI == null) ? 0 : URI.hashCode());
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
		if (URI == null) {
			if (other.URI != null)
				return false;
		} else if (!URI.equals(other.URI))
			return false;
		return true;
	}

	public void setAppearingAliasesInArticle(
			TreeSet<String> appearingAliasesInArticle) {
		this.appearingAliasesInComment = appearingAliasesInArticle;
	}

	private ArrayList<Aspect> aspects = new ArrayList<Aspect>();
	private ArrayList<Integer> aspectsAppearances = new ArrayList<Integer>();

	public String getURI() {
		return URI;
	}

	public void setURI(String uRI) {
		URI = uRI;
	}

	public Set<String> getAliases() {
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
	public int compareTo(Entity obj) {
		return this.URI.compareTo(obj.URI);
	}

	public String getAnchorName() {
		return anchorName;
	}

	public void setAnchorName(String anchorName) {
		this.anchorName = anchorName;
	}

	public Set<String> getTypes() {
		return types;
	}

	public void setTypes(Set<String> types) {
		this.types = types;
	}

	public boolean isAPerson() {
		return isAPerson;
	}

	public void setPerson(boolean isAPerson) {
		this.isAPerson = isAPerson;
	}

	public Set<String> getPartOfNames() {
		return partOfNames;
	}

	public void setPartOfNames(Set<String> partOfNames) {
		this.partOfNames = partOfNames;
	}

}
