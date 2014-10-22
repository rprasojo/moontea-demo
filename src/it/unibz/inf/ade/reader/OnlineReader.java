package it.unibz.inf.ade.reader;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Set;
import java.util.TreeSet;
import java.util.concurrent.PriorityBlockingQueue;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

public class OnlineReader extends Reader {

	public static final int DISQUS = 0;
	private int sourceID;
	private String url;

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public OnlineReader(String url) {
		this.url = url;
	}

	@Override
	public void chooseReadingSource(int sourceID) {
		this.sourceID = sourceID;
		crawl();
	}

	public void crawl() {
		switch (sourceID) {
		case DISQUS:
			crawlDisqus(url);
			break;
		}
	}

	private void crawlDisqus(String url) {
		String html = "";
		if (urlIsOnline(url)) {
			html = downloadHTML(url);
			// System.out.println("here");
		} else {
			try {
				html = readFile(url, Charset.forName("UTF-8"));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		int size = 100;
		// crawlDisqusUsingLists(html);
		crawlDisqusUsingTree(html, size);

	}

	private void crawlDisqusUsingTree(String html, int size) {
		Document body = Jsoup.parseBodyFragment(html);
		Element post_list = body.getElementById("post-list");
		CommentNode root = new CommentNode(null, "", "");
		int i = 1;
		List<CommentNode> allComments = new LinkedList<CommentNode>();
		Queue<CommentNode> leafComments = new PriorityBlockingQueue<CommentNode>(
				1, new CommentLeafComparator());
		List<CommentNode> removedNode = new LinkedList<CommentNode>();
		for (Element e : post_list.children().tagName("li")) {
			addCommentToTree(e, root, i, allComments, leafComments);
			i++;
		}

		while (allComments.size() > size) {
			CommentNode tbRemoved = leafComments.poll();
			allComments.remove(tbRemoved);
			if (tbRemoved != null) {
				CommentNode parent = tbRemoved.getParent();
				if (parent != null) {
					parent.removeChild(tbRemoved);
					if (parent.isLeaf())
						leafComments.add(parent);
					removedNode.add(tbRemoved);
				}
			}
		}

		Iterator<CommentNode> commentIterator = allComments.iterator();
		while (commentIterator.hasNext()) {
			CommentNode c = commentIterator.next();
			storeLocally(url + "_comments_filtered", c.key, c.comment);
		}

		System.out.println("Statistics: ");
		System.out
				.println("Resulted comments: "
						+ "MAX:"
						+ Collections.max(allComments,
								new CommentLeafComparator()).comment
								.split("\\b").length
						+ " MIN:"
						+ Collections.min(allComments,
								new CommentLeafComparator()).comment
								.split("\\b").length + " AVG:"
						+ computeAverageWordLength(allComments));
		System.out
				.println("Deleted comments: "
						+ "MAX:"
						+ Collections.max(leafComments,
								new CommentLeafComparator()).comment
								.split("\\b").length
						+ " MIN:"
						+ Collections.min(leafComments,
								new CommentLeafComparator()).comment
								.split("\\b").length + " AVG:"
						+ computeAverageWordLength(leafComments));
	}

	private double computeAverageWordLength(Collection<CommentNode> comments) {
		int res = 0;

		Iterator<CommentNode> i = comments.iterator();
		while (i.hasNext()) {
			res += i.next().comment.split("\\b").length;
		}

		return res / comments.size();
	}

	@SuppressWarnings("unused")
	private void crawlDisqusUsingLists(String html) {
		Document body = Jsoup.parseBodyFragment(html);
		Element post_list = body.getElementById("post-list");
		HashMap<String, String> nameToCommentMapper = new HashMap<String, String>();
		int i = 1;
		for (Element e : post_list.children().tagName("li")) {
			addCommentToMap(e, "", i, nameToCommentMapper);
			i++;
		}

		String[] keys = new String[nameToCommentMapper.keySet().size()];
		keys = nameToCommentMapper.keySet().toArray(keys);

		Arrays.sort(keys, new StringWordComparator(nameToCommentMapper));
		Set<String> setOfKeys = new TreeSet<String>();
		i = 0;
		for (; i < 100; i++) {
			setOfKeys.add(keys[i]);
		}

		String[] initialSet = new String[setOfKeys.size()];
		initialSet = setOfKeys.toArray(initialSet);
		for (i = 0; i < initialSet.length; i++) {
			checkParent(initialSet[i], setOfKeys);
		}

		List<String> resultedSetAfterAddingParent = new ArrayList<String>();
		resultedSetAfterAddingParent.addAll(setOfKeys);

		Collections.sort(resultedSetAfterAddingParent,
				new ComparatorForPruning(resultedSetAfterAddingParent,
						nameToCommentMapper));

		while (setOfKeys.size() > 100) {
			setOfKeys.remove(resultedSetAfterAddingParent.get(0));
			resultedSetAfterAddingParent.clear();
			resultedSetAfterAddingParent.addAll(setOfKeys);
			Collections.sort(resultedSetAfterAddingParent,
					new ComparatorForPruning(resultedSetAfterAddingParent,
							nameToCommentMapper));
		}

		System.out.println(setOfKeys.size());
		resultedSetAfterAddingParent.clear();
		resultedSetAfterAddingParent.addAll(setOfKeys);
		System.out.println(resultedSetAfterAddingParent.size());

		for (i = 0; i < resultedSetAfterAddingParent.size(); i++) {
			storeLocally(
					url + "_comments_filtered",
					resultedSetAfterAddingParent.get(i),
					nameToCommentMapper.get(resultedSetAfterAddingParent.get(i)));
		}
	}

	private void checkParent(String key, Set<String> setOfKeys) {
		if (!key.contains("."))
			return;

		String parent = key.replaceAll("\\..$", "");
		if (setOfKeys.contains(parent))
			return;

		setOfKeys.add(parent);
		checkParent(parent, setOfKeys);
	}

	private void addCommentToTree(Element commentHolder, CommentNode parent,
			int commentCount, List<CommentNode> allComments,
			Queue<CommentNode> leafComments) {
		StringBuilder sb = new StringBuilder();
		Element divContent = commentHolder.getElementsByClass("post-message")
				.first();
		for (Element p : divContent.children().tagName("p")) {
			sb.append(p.text() + "\n\n");
		}

		String id = parent.key;
		if (!id.isEmpty()) {
			id = id + ".";
		}
		id = id + commentCount;

		CommentNode child = new CommentNode(parent, id, sb.toString());
		parent.addChild(child);
		allComments.add(child);

		Element children = commentHolder.getElementsByClass("children").first();
		if (children == null || children.children().tagName("li") == null
				|| children.children().tagName("li").size() == 0) {
			leafComments.add(child);
			return;
		} else {
			int i = 1;
			for (Element e : children.children().tagName("li")) {
				addCommentToTree(e, child, i, allComments, leafComments);
				i++;
			}
		}
	}

	private void addCommentToMap(Element commentHolder, String parentID,
			int commentCount, HashMap<String, String> nameToCommentMapper) {
		StringBuilder sb = new StringBuilder();
		Element divContent = commentHolder.getElementsByClass("post-message")
				.first();
		for (Element p : divContent.children().tagName("p")) {
			sb.append(p.text() + "\n\n");
		}
		String id = parentID;
		if (!id.isEmpty()) {
			id = id + ".";
		}
		id = id + commentCount;

		nameToCommentMapper.put(id, sb.toString());

		Element children = commentHolder.getElementsByClass("children").first();
		if (children != null) {
			int i = 1;
			for (Element e : children.children().tagName("li")) {
				addCommentToMap(e, id, i, nameToCommentMapper);
				i++;
			}
		} else {
			return;
		}

	}

	private String downloadHTML(String url2) {
		// TODO Auto-generated method stub
		return null;
	}

	private boolean urlIsOnline(String url2) {
		return url2.contains("http://") || url2.contains("https://");
	}

	private void storeLocally(String path, String key, String content) {
		try {
			File f = new File(path + "/" + "Comment_" + key + ".xml");
			if (!f.exists()) {
				f.getParentFile().mkdirs();
				f.createNewFile();
			}

			BufferedWriter bw = new BufferedWriter(new FileWriter(new File(path
					+ "/" + "Comment_" + key + ".xml")));
			bw.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
			bw.write("<comment id=\"" + key + "\">\n");
			bw.write("\t<original>\n");
			bw.write("\t" + content + "\n");
			bw.write("\t</original>\n");
			bw.write("\t<cleaned>\n");
			bw.write("\t</cleaned>\n");
			bw.write("\t<entity_tagged>\n");
			bw.write("\t</entity_tagged>\n");
			bw.write("\t<summary>\n");
			bw.write("\t</summary>\n");
			bw.write("</comment>\n");
			bw.flush();
			bw.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private String readFile(String path, Charset encoding) throws IOException {
		byte[] encoded = Files.readAllBytes(Paths.get(path));
		return new String(encoded, encoding);
	}

	private class ComparatorForPruning implements Comparator<String> {

		List<String> nodes;
		HashMap<String, String> nameToCommentMapper;

		public ComparatorForPruning(List<String> nodes,
				HashMap<String, String> nameToCommentMapper) {
			this.nodes = nodes;
			this.nameToCommentMapper = nameToCommentMapper;
		}

		@Override
		public int compare(String k1, String k2) {
			int c1 = 0, c2 = 0;
			String com1 = nameToCommentMapper.get(k1);
			String com2 = nameToCommentMapper.get(k2);
			for (String s : nodes) {
				if (s.startsWith(k1))
					c1++;
				if (s.startsWith(k2))
					c2++;
			}
			if (c1 > c2)
				return 1;
			if (c2 > c1)
				return -1;
			// if (o1.key.split("\\.").length > o2.key.split("\\.").length)
			// return -1;
			// if (o2.key.split("\\.").length > o1.key.split("\\.").length)
			// return 1;

			if (com1.split("\\b").length > com2.split("\\b").length)
				return -1;
			if (com2.split("\\b").length > com1.split("\\b").length)
				return 1;
			if (com1.length() > com2.length())
				return -1;
			if (com2.length() > com1.length())
				return 1;
			return k2.compareTo(k1);
		}
	}

	private class StringWordComparator implements Comparator<String> {

		private HashMap<String, String> nameToCommentMapper;

		public StringWordComparator(HashMap<String, String> nameToCommentMapper) {
			this.nameToCommentMapper = nameToCommentMapper;
		}

		@Override
		public int compare(String o1, String o2) {
			int wc1 = nameToCommentMapper.get(o1).split("\\b").length;
			int wc2 = nameToCommentMapper.get(o2).split("\\b").length;

			if (wc1 > wc2)
				return -1;
			else if (wc2 > wc1)
				return 1;
			// if(this.comment.length() > o2.comment.length()) return 1;
			// else if(o2.comment.length() > this.comment.length()) return -1;
			return 0;
		}

	}

	private class CommentLeafComparator implements Comparator<CommentNode> {

		@Override
		public int compare(CommentNode o1, CommentNode o2) {
			int wc1 = o1.comment.split("\\b").length;
			int wc2 = o2.comment.split("\\b").length;

			if (wc1 > wc2)
				return -1;
			else if (wc2 > wc1)
				return 1;
			else if (o1.comment.length() > o2.comment.length())
				return -1;
			else if (o1.comment.length() < o2.comment.length())
				return 1;
			if (o1.key.split("\\.").length > o2.key.split("\\.").length)
				return -1;
			if (o2.key.split("\\.").length > o1.key.split("\\.").length)
				return 1;
			return o1.key.compareTo(o2.key);
		}

	}
}
