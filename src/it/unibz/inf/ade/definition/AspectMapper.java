package it.unibz.inf.ade.definition;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.TreeSet;

public class AspectMapper {
	TreeSet<EntityAndAspectTriple> listOfInambiguousAspectMapper = new TreeSet<EntityAndAspectTriple>();
	HashMap<EntityAndOpinionatedWordsTuples, Aspect> inambiguousMapper = new HashMap<EntityAndOpinionatedWordsTuples, Aspect>();
	HashMap<EntityAndOpinionatedWordsTuples, ArrayList<Aspect>> ambiguousMapper = new HashMap<EntityAndOpinionatedWordsTuples, ArrayList<Aspect>>();
	
	
	
}
