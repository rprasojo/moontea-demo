package it.unibz.inf.ade.extractor;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.HashMap;

import com.zemanta.api.Zemanta;

import it.unibz.inf.ade.reader.Reader;

public class ZemantaExtractor extends EntityExtractor {

	public ZemantaExtractor(Reader reader, boolean useLocal) {
		super(reader, useLocal);
	}
	
	public void zemantaExtract() {
		if(useLocal) zemantaLocalCrawl();
		else callZemanta();
	}

	private void callZemanta() {
		// TODO Auto-generated method stub
		
	}

	private void zemantaLocalCrawl() {
		
	}

}
