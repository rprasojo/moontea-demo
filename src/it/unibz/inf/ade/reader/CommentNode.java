package it.unibz.inf.ade.reader;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.LinkedList;
import java.util.List;

import javax.swing.tree.TreeNode;

public class CommentNode implements TreeNode {

	List<CommentNode> childList = new LinkedList<CommentNode>();
	CommentNode parent = null;
	String key;
	String comment;

	public boolean isRoot() {
		return parent == null;
	}
	
	public CommentNode(CommentNode parent, String key, String comment) {
		this.parent = parent;
		this.key = key;
		this.comment = comment;
	}
	
	public void removeChild(CommentNode child) {
		this.childList.remove(child);
	}
	
	public int getHeight() {
		if(isLeaf()) return 0;
		else {
			List<Integer> childHeightList = new ArrayList<Integer>();
			for(CommentNode child : childList) {
				childHeightList.add(child.getHeight());
			}
			return 1+Collections.max(childHeightList);
		}
	}

	@Override
	public TreeNode getChildAt(int childIndex) {
		return childList.get(childIndex);
	}

	@Override
	public int getChildCount() {
		return childList.size();
	}

	@Override
	public CommentNode getParent() {
		return parent;
	}

	@Override
	public int getIndex(TreeNode node) {
		return childList.indexOf(node);
	}

	@Override
	public boolean getAllowsChildren() {
		return true;
	}

	@Override
	public boolean isLeaf() {
		return (childList.size() == 0);
	}

	@Override
	public Enumeration<CommentNode> children() {
		// TODO Auto-generated method stub
		return null;
	}
	
	public void addChild(int index, String comment) {
		addChild(this.key+"."+index, comment);
	}
	
	public void addChild(String key, String comment) {
		addChild(new CommentNode(this, key, comment));
	}
	
	public void addChild(CommentNode child) {
		this.childList.add(child);
	}

}
