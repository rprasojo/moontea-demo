package it.unibz.inf.ade.definition;

import java.util.ArrayList;
import java.util.TreeSet;

public class Article {
	private Comment topic;
	private ArrayList<Comment> listOfComments = new ArrayList<Comment>();
	private AspectMapper aspectMapper = new AspectMapper();
	private TreeSet<Entity> setOfEntities = new TreeSet<Entity>();

	public Comment getTopic() {
		return topic;
	}

	public void setTopic(Comment topic) {
		this.topic = topic;
	}

	public ArrayList<Comment> getListOfComments() {
		return listOfComments;
	}

	public void setListOfComments(ArrayList<Comment> listOfComments) {
		this.listOfComments = listOfComments;
	}

	public AspectMapper getAspectMapper() {
		return aspectMapper;
	}

	public void setAspectMapper(AspectMapper aspectMapper) {
		this.aspectMapper = aspectMapper;
	}
	
	public TreeSet<Entity> getSetOfEntities() {
		return setOfEntities;
	}
	
	public Entity getEntityBasedOnAlias(String alias) {
		ArrayList<Entity> ents = new ArrayList<Entity>();
		for(Entity e : setOfEntities) {
			if(e.getAliases().contains(alias)) {
				ents.add(e);
			}
		}
		return resolveAmbiguousEntityAlias(ents, alias);
	}

	private Entity resolveAmbiguousEntityAlias(ArrayList<Entity> ents,
			String alias) {
		// TODO Auto-generated method stub
		return ents.get(0);
	}
}
