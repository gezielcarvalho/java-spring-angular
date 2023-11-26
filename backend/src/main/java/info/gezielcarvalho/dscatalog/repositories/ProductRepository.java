package info.gezielcarvalho.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import info.gezielcarvalho.dscatalog.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
