package it.unibz.inf.ade.definition;

public class EntityAndAspectTriple {
	private String entity;
	private String opinionatedWords;
	private Aspect aspect;
	
	EntityAndAspectTriple(String entity, String opinionatedWords, Aspect aspect) {
		this.entity = entity;
		this.opinionatedWords = opinionatedWords;
		this.aspect = aspect;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((aspect == null) ? 0 : aspect.hashCode());
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
		EntityAndAspectTriple other = (EntityAndAspectTriple) obj;
		if (aspect == null) {
			if (other.aspect != null)
				return false;
		} else if (!aspect.equals(other.aspect))
			return false;
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
