package info.gezielcarvalho.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import info.gezielcarvalho.dscatalog.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
