package it.unibz.inf.ade.definition;

import java.util.ArrayList;

public class Entity {
	private String mainName;
	private ArrayList<String> aliases = new ArrayList<String>();
	private ArrayList<Aspect> aspects = new ArrayList<Aspect>();
	private ArrayList<Integer> aspectsAppearances = new ArrayList<Integer>();
}
