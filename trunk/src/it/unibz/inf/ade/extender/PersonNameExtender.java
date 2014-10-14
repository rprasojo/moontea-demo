package it.unibz.inf.ade.extender;

import it.unibz.inf.ade.definition.Article;
import it.unibz.inf.ade.definition.Comment;
import it.unibz.inf.ade.definition.Entity;
import it.unibz.inf.ade.reader.Reader;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

public class PersonNameExtender {

	private HashMap<String, Set<Entity>> nameExtenderMapper = new HashMap<String, Set<Entity>>();
	private Set<String> setOfNames = new TreeSet<String>();
	private Reader reader;

	public Reader getReader() {
		return reader;
	}

	public void setReader(Reader reader) {
		this.reader = reader;
	}

	public PersonNameExtender(Reader reader) {
		this.reader = reader;
		init();
	}

	public HashMap<String, Set<Entity>> getNameExtenderMapper() {
		return nameExtenderMapper;
	}

	public void setNameExtenderMapper(
			HashMap<String, Set<Entity>> nameExtenderMapper) {
		this.nameExtenderMapper = nameExtenderMapper;
	}

	public void extend() {
		for (Comment c : this.getReader().getArticle().getListOfComments()) {
			Iterator<Entity> i = c.getEntities().iterator();
			String tempStr = c.getOriginalText();
			while (i.hasNext()) {
				Entity e = i.next();
				tempStr = tempStr.replaceAll(e.getAnchorName(), e.getUuid());

			}
			c.setExtendedText(tempStr);
			c.changeMode(Comment.EXTENDED);
		}

		for (Comment c : this.getReader().getArticle().getListOfComments()) {
			Iterator<String> i = setOfNames.iterator();
			String tempStr = c.getExtendedText();
			while (i.hasNext()) {
				String x = i.next();
				Set<Entity> tempEntitySet = nameExtenderMapper.get(x);
				if (tempEntitySet.size() == 1) {
					// TODO: set of entities from the map, I have to implement
					// disambiguation. Now it simply take the first element of
					// the set.
					Entity e = (Entity) tempEntitySet.toArray()[0];
					tempStr = tempStr
							.replaceAll("\\b" + x + "\\b", e.getUuid());
				}
			}
			c.setExtendedText(tempStr);
			c.changeMode(Comment.EXTENDED);
		}

		for (Comment c : this.getReader().getArticle().getListOfComments()) {
			Iterator<Entity> i = this.getReader().getArticle()
					.getSetOfEntities().iterator();
			String tempStr = c.getExtendedText();
			while (i.hasNext()) {
				Entity e = i.next();
				tempStr = tempStr.replaceAll(e.getUuid(), e.getAnchorName());
			}
			c.setExtendedText(tempStr);
			c.changeMode(Comment.EXTENDED);
		}
	}

	public void init() {
		Article a = reader.getArticle();
		Comment t = a.getTopic();
		for (Entity e : t.getEntities()) {
			if (e.isAPerson()) {
				Set<Entity> temp;
				for (String partOfAlias : e.getPartOfNames()) {
					if (partOfAlias.length() > 1) {
						setOfNames.add(partOfAlias);
						if (!nameExtenderMapper.containsKey(partOfAlias)) {
							temp = new TreeSet<Entity>();
							temp.add(e);
							nameExtenderMapper.put(partOfAlias, temp);
							// if(partOfAlias.equals("Bieber")) {
							// System.out.println(e);
							// System.out.println(nameExtenderMapper.get(partOfAlias).toArray()[0]);
							// }
						} else {
							temp = nameExtenderMapper.get(partOfAlias);
							temp.add(e);
							// if(partOfAlias.equals("Bieber")) {
							// System.out.println(e.getURI() + " added");
							// }
						}
					}
				}
			} else {
				Set<Entity> temp;
				for (String partOfAlias : e.getAliases()) {
					if (partOfAlias.length() > 1) {
						setOfNames.add(partOfAlias);
						if (!nameExtenderMapper.containsKey(partOfAlias)) {
							temp = new TreeSet<Entity>();
							temp.add(e);
							nameExtenderMapper.put(partOfAlias, temp);
							// if(partOfAlias.equals("Bieber")) {
							// System.out.println(e);
							// System.out.println(nameExtenderMapper.get(partOfAlias).toArray()[0]);
							// }
						} else {
							temp = nameExtenderMapper.get(partOfAlias);
							temp.add(e);
							// if(partOfAlias.equals("Bieber")) {
							// System.out.println(e.getURI() + " added");
							// }
						}
					}
				}
			}
		}
	}

	public Set<String> getListOfNames() {
		return setOfNames;
	}

	public void setListOfNames(Set<String> listOfNames) {
		this.setOfNames = listOfNames;
	}

}
