package info.gezielcarvalho.dscatalog.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import info.gezielcarvalho.dscatalog.dto.CategoryDTO;
import info.gezielcarvalho.dscatalog.dto.ProductCreateUpdateDTO;
import info.gezielcarvalho.dscatalog.dto.ProductDTO;
import info.gezielcarvalho.dscatalog.entities.Product;
import info.gezielcarvalho.dscatalog.repositories.CategoryRepository;
import info.gezielcarvalho.dscatalog.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	@Autowired
	private CategoryRepository categoryRepository;

	@Transactional(readOnly = true)
	public ProductDTO findOne(Long id) {
		var result = repository.findById(id);
		if (result.isPresent()) {
			return new ProductDTO(result.get());
		}
		return null;
	}

	@Transactional(readOnly = true)
	public ProductDTO create(ProductCreateUpdateDTO product) {
		var category = categoryRepository.findById(product.getCategory());
		var result = repository
				.save(new Product(
						product.getId(),
						product.getName(),
						product.getPrice(), 
						product.getImgUrl(), 
						new CategoryDTO(category.get()), 
						product.getDescription()));
		return new ProductDTO(result);
	}

	@Transactional
	public ProductDTO save(Long id, ProductCreateUpdateDTO product) {
		var category = categoryRepository.findById(product.getCategory());
		Product entity = repository.getReferenceById(id);
		entity.setName(product.getName());
		entity.setCategory(category.get());
		entity.setDescription(product.getDescription());
		entity.setImgUrl(product.getImgUrl());
		entity.setPrice(product.getPrice());
		var result = repository
				.save(entity);
		return new ProductDTO(result);
	}

	public void delete(Long id) {
		// after adding product entity, check referential integrity 
		repository.deleteById(id);
	}

	@Transactional(readOnly = true)
	public Page<ProductDTO> findAllPaged(Pageable pageable) {
		Page<Product> list = repository.findAll(pageable);       
		return list.map(cat ->  new ProductDTO(cat));
	}
}
