package it.unibz.inf.ade.definition;

import java.util.ArrayList;

public class Article {
	private Comment topic;
	private ArrayList<Comment> listOfComments = new ArrayList<Comment>();
	private AspectMapper aspectMapper = new AspectMapper();

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
}
