package info.gezielcarvalho.dscatalog.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import info.gezielcarvalho.dscatalog.dto.CategoryDTO;
import info.gezielcarvalho.dscatalog.repositories.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository repository;

	// readOnly true avoids locking database 
	@Transactional(readOnly = true)
	public List<CategoryDTO> findAll() {
	    return repository
	    		.findAll()
	    		.stream()
	            .map(cat ->  new CategoryDTO(cat))
	            .collect(Collectors.toList());
	}

	public CategoryDTO findOne(Long id) {
		var result = repository.findById(id);
		if (result.isPresent()) {
			return new CategoryDTO(result.get());
		}
		return null;
	}
}
