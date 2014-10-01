package it.unibz.inf.ade.definition;

public class EntityAndOpinionatedWordsTuples {
	private String entity;
	private String opinionatedWords;
	
	EntityAndOpinionatedWordsTuples(String entity, String opinionatedWords) {
		this.entity = entity;
		this.opinionatedWords = opinionatedWords;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((entity == null) ? 0 : entity.hashCode());
		result = prime
				* result
				+ ((opinionatedWords == null) ? 0 : opinionatedWords.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		EntityAndOpinionatedWordsTuples other = (EntityAndOpinionatedWordsTuples) obj;
		if (entity == null) {
			if (other.entity != null)
				return false;
		} else if (!entity.equals(other.entity))
			return false;
		if (opinionatedWords == null) {
			if (other.opinionatedWords != null)
				return false;
		} else if (!opinionatedWords.equals(other.opinionatedWords))
			return false;
		return true;
	}
}
