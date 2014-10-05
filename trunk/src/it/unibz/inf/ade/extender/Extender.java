package it.unibz.inf.ade.extender;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import it.unibz.inf.ade.definition.Comment;
import it.unibz.inf.ade.reader.LocalReader;
import it.unibz.inf.ade.reader.Reader;

public class Extender {

	private PersonNameExtender pnExtender;
	private Reader reader;

	public Reader getReader() {
		return reader;
	}

	public void setReader(Reader reader) {
		this.reader = reader;
	}

	public Extender(Reader reader) {
		this.reader = reader;
		pnExtender = new PersonNameExtender(reader);
	}

	public void extend() {
		pnExtender.extend();
	}

	public PersonNameExtender getPnExtender() {
		return pnExtender;
	}

	public void setPnExtender(PersonNameExtender pnExtender) {
		this.pnExtender = pnExtender;
	}

	public void writeExtendedArticleLocally() {
		if (reader instanceof LocalReader) {
			String path = "", fileName = "";
			switch (reader.getSourceID()) {
			case LocalReader.SMALL_DATASET:
				path = "dataset/small/extended/";
				fileName = reader.getSourceName();
				break;
			}
			try {
				BufferedWriter bw = new BufferedWriter(new FileWriter(new File(path+fileName)));
				int i = 1;
				for(Comment c : reader.getArticle().getListOfComments()) {
					bw.write("Comment " + i + "\n");
					bw.write(c.getExtendedText());
					bw.write("\n================================================================\n");
					i++;
				}
				bw.flush();
				bw.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

}
