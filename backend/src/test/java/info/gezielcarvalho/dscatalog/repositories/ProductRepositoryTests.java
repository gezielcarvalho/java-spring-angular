package info.gezielcarvalho.dscatalog.repositories;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class ProductRepositoryTests {
	
	@Autowired
	private ProductRepository repository;
	
	@Test
	public void deleteShouldDeleteObjectWhenIdExists() {
		// Arrange
		var existingId = 1L;
		// Act
		repository.deleteById(existingId);
		// Assert
		var deleted = repository.findById(existingId);
		Assertions.assertTrue(deleted.isEmpty());
	}

}
