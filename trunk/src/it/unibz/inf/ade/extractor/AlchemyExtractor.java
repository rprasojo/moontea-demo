package it.unibz.inf.ade.extractor;

import it.unibz.inf.ade.reader.Reader;

import com.alchemyapi.api.AlchemyAPI;

import org.xml.sax.SAXException;
import org.w3c.dom.Document;

import java.io.*;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

public class AlchemyExtractor extends EntityExtractor {

	public AlchemyExtractor(Reader reader, boolean useLocal) {
		super(reader, useLocal);
	}

	private void alchemyExtract() throws IOException, SAXException,
			ParserConfigurationException, XPathExpressionException {

		// Create an AlchemyAPI object.
		AlchemyAPI alchemyObj = AlchemyAPI.GetInstanceFromString("792de3d5b5dea24ca9dc4e8e51d14ae67e97c391");

		// Extract a ranked list of named entities for a web URL.
		Document doc = alchemyObj
				.URLGetRankedNamedEntities("http://www.techcrunch.com/");
		System.out.println(getStringFromDocument(doc));

		// Extract a ranked list of named entities from a text string.
		doc = alchemyObj
				.TextGetRankedNamedEntities("Hello there, my name is Bob Jones.  I live in the United States of America.  "
						+ "Where do you live, Fred?");
		System.out.println(getStringFromDocument(doc));

		// Load a HTML document to analyze.
//		String htmlDoc = getFileContents("data/example.html");

		// Extract a ranked list of named entities from a HTML document.
//		doc = alchemyObj.HTMLGetRankedNamedEntities(htmlDoc,
//				"http://www.test.com/");
//		System.out.println(getStringFromDocument(doc));
	}

	@Override
	public void extractComment() {
		try {
			alchemyExtract();
		} catch (XPathExpressionException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (SAXException e) {
//			e.printStackTrace();
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		}

	}

	@Override
	public void extractTopic() {
		// TODO Auto-generated method stub

	}

	// utility function
	private String getFileContents(String filename) throws IOException,
			FileNotFoundException {
		File file = new File(filename);
		StringBuilder contents = new StringBuilder();

		BufferedReader input = new BufferedReader(new FileReader(file));

		try {
			String line = null;

			while ((line = input.readLine()) != null) {
				contents.append(line);
				contents.append(System.getProperty("line.separator"));
			}
		} finally {
			input.close();
		}

		return contents.toString();
	}

	// utility method
	private String getStringFromDocument(Document doc) {
		try {
			DOMSource domSource = new DOMSource(doc);
			StringWriter writer = new StringWriter();
			StreamResult result = new StreamResult(writer);

			TransformerFactory tf = TransformerFactory.newInstance();
			Transformer transformer = tf.newTransformer();
			transformer.transform(domSource, result);

			return writer.toString();
		} catch (TransformerException ex) {
			ex.printStackTrace();
			return null;
		}
	}

}
