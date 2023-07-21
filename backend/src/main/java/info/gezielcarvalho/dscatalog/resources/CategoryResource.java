package info.gezielcarvalho.dscatalog.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import info.gezielcarvalho.dscatalog.dto.CategoryDTO;
import info.gezielcarvalho.dscatalog.services.CategoryService;

@RestController
@RequestMapping(value = "/categories")
public class CategoryResource {
	
	@Autowired
	private CategoryService service;
	
	@GetMapping
	public ResponseEntity<List<CategoryDTO>> findAll(){
		return ResponseEntity.ok().body(service.findAll());
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<CategoryDTO> findOne(@PathVariable Long id){
		var result = service.findOne(id);
		if (result == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(service.findOne(id));
	}
	
	@PostMapping
	public ResponseEntity<CategoryDTO> create(@RequestBody CategoryDTO category){
		var result = service.create(category);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(result.getId()).toUri();
		return ResponseEntity.created(uri).body(result);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<CategoryDTO> update(@PathVariable Long id, @RequestBody CategoryDTO category) {
		var result = service.findOne(id);
		if (result == null) {
			return ResponseEntity.notFound().build();
		}
		CategoryDTO updated = service.save(id,category);
		return ResponseEntity.ok().body(updated);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<CategoryDTO> delete(@PathVariable Long id) {
		var result = service.findOne(id);
		if (result == null) {
			return ResponseEntity.notFound().build();
		}
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
