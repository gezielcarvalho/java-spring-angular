package info.gezielcarvalho.dscatalog.resources;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import info.gezielcarvalho.dscatalog.entities.Category;

@RestController
@RequestMapping(value = "/categories")
public class CategoryResource {
	
	@GetMapping
	public ResponseEntity<ArrayList<Category>> findAll(){
		var list = new ArrayList<Category>();
		list.add(new Category(1L, "Books"));
		list.add(new Category(1L, "Electronics"));
		return ResponseEntity.ok().body(list);
	}
}
