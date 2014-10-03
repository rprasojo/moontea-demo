package it.unibz.inf.ade.reader;

import it.unibz.inf.ade.definition.Comment;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class LocalReader extends Reader {

	public static final int SMALL_DATASET = 0;
	public static final int BIG_DATASET = 1;
	public static final int IN_CODE_DATASET = 2;

	private String sourceURI;

	@Override
	public void chooseReadingSource(int sourceID) {
		this.sourceID = sourceID;
		switch (sourceID) {
		case SMALL_DATASET:
			readSmallDataset();
			break;
		case BIG_DATASET:
			readBigDataset();
			break;
		case IN_CODE_DATASET:
			readInCodeDataset();
			break;
		}

	}

	private void readInCodeDataset() {

	}

	private void readBigDataset() {

	}

	private void readSmallDataset() {
		String datasetFolder = "dataset/small/original";
		File dataset = new File(datasetFolder);
		String article = getWhichArticle(dataset);
		sourceName = article;
		setSourceURI(datasetFolder + "/" + article);
		try {
			BufferedReader br = new BufferedReader(new FileReader(new File(
					sourceURI)));
			String temp = br.readLine();
			StringBuilder sb = new StringBuilder();
			while (!temp.startsWith("===")) {
				sb.append(temp + "\n");
				temp = br.readLine();
			}
			this.article.setTopic(new Comment(sb.toString(), Comment.ORIGINAL));

			sb.setLength(0);
			br.readLine();
			temp = br.readLine();
			while (true) {
				if (temp == null || temp.startsWith("===")) {
					this.article.getListOfComments().add(
							new Comment(sb.toString(), Comment.ORIGINAL));
					if (temp == null)
						break;
					sb.setLength(0);
					br.readLine(); // skip the Comment # part
				} else {
					sb.append(temp + "\n");
				}
				temp = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private String getWhichArticle(File dataset) {
		// TODO create user-chosen file
		String[] articleList = { "Celebrity.txt", "Healthcare.txt",
				"Politics.txt", "Sport.txt", "Tech.txt" };
		return articleList[0];
	}

	public String getSourceURI() {
		return sourceURI;
	}

	public void setSourceURI(String sourceURI) {
		this.sourceURI = sourceURI;
	}

}