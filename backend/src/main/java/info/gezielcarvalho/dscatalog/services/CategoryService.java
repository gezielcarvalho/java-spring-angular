package info.gezielcarvalho.dscatalog.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import info.gezielcarvalho.dscatalog.dto.CategoryDTO;
import info.gezielcarvalho.dscatalog.entities.Category;
import info.gezielcarvalho.dscatalog.repositories.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository repository;

	@Transactional(readOnly = true)
	public CategoryDTO findOne(Long id) {
		var result = repository.findById(id);
		if (result.isPresent()) {
			return new CategoryDTO(result.get());
		}
		return null;
	}

	@Transactional
	public CategoryDTO create(CategoryDTO category) {
		var result = repository
				.save(new Category(category.getName()));
		return new CategoryDTO(result);
	}

	@Transactional
	public CategoryDTO save(Long id, CategoryDTO category) {
		Category entity = repository.getReferenceById(id);
		entity.setName(category.getName());
		var result = repository
				.save(entity);
		return new CategoryDTO(result);
	}

	public void delete(Long id) {
		// after adding product entity, check referential integrity 
		repository.deleteById(id);
	}

	@Transactional(readOnly = true)
	public Page<CategoryDTO> findAllPaged(PageRequest pageRequest) {
		Page<Category> list = repository.findAll(pageRequest);       
		return list.map(cat ->  new CategoryDTO(cat));
	}
}
