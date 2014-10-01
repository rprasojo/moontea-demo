package it.unibz.inf.ade.definition;

import java.util.ArrayList;

import it.unibz.inf.ade.cleaner.Cleaner;
import it.unibz.inf.ade.extender.Extender;

public class Comment {

	public static final int ORIGINAL = 0;
	public static final int CLEANED = 1;
	public static final int EXTENDED = 2;
	public static final int CLEANED_AND_EXTENDED = 3;

	private String text;
	private String originalText;
	private String cleanedText;
	private String extendedText;
	private String cleanedAndExtendedText;

	private int mode = -1;
	
	private ArrayList<Entity> entities = new ArrayList<Entity>();
	private ArrayList<Integer> entityAppearances = new ArrayList<Integer>();
	
	public Comment(String text, int mode) {
		initText(text, mode);
	}

	private void initText (String text, int mode) {
		originalText = text;
		changeMode(mode);
	}
	
	public void renewText(String text, int mode) {
		this.text = this.originalText = this.cleanedAndExtendedText = this.cleanedText = "";
		initText(text, mode);
	}

	public void changeMode(int mode) {
		this.mode = mode;
		setUsedText(mode);
	}

	/**
	 * Specify which text mode is used, original, cleaned, extended, or both
	 * cleaned and extended.
	 * 
	 * @param mode
	 *            an integer specifying the text mode: 0 - original, 1 -
	 *            cleaned, 2 - extended, 3 - both cleaned and extended. Default:
	 *            3.
	 */
	private void setUsedText(int mode) {
		switch (mode) {
		case ORIGINAL:
			text = originalText;
			break;
		case CLEANED:
			if (cleanedText.isEmpty())
				cleanedText = Cleaner.clean(originalText);
			text = cleanedText;
			break;
		case EXTENDED:
			if (extendedText.isEmpty())
				extendedText = Extender.extend(originalText);
			text = extendedText;
			break;
		case CLEANED_AND_EXTENDED:
		default:
			if (cleanedText.isEmpty())
				cleanedText = Cleaner.clean(originalText);
			if (cleanedAndExtendedText.isEmpty())
				cleanedAndExtendedText = Extender.extend(cleanedText);
			text = cleanedAndExtendedText;
			break;
		}
	}
	
	public String getText() {
		return text;
	}
	
	public int getMode() {
		return mode;
	}

}
