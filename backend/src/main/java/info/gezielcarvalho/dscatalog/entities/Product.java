package info.gezielcarvalho.dscatalog.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

import info.gezielcarvalho.dscatalog.dto.CategoryDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "`Products`")
public class Product implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "`Id`")
	private Long id;
	@Column(name = "`Name`")
	private String name;
	@Column(name ="`Price`")
	private Double price;
	@Column(name = "`ImgUrl`")
	private String imgUrl;
	
	@ManyToOne
    @JoinColumn(name = "`CategoryId`")
	private Category category;
	
	@Column(name ="`Description`", length = 512)
	private String description;
	@Column(name = "`CreatedAt`", columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant	 createdAt;
	@Column(name = "`UpdatedAt`", columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant	 updatedAt;
	
	public Product() {
		super();
	}
		
	public Product(Long id, String name, Double price, String imgUrl, Category category, String description,
			Instant createdAt, Instant updatedAt) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.imgUrl = imgUrl;
		this.category = category;
		this.description = description;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	public Product(Long id, String name, Double price, String imgUrl, CategoryDTO category, String description) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.imgUrl = imgUrl;
		this.category = new Category(category);
		this.description = description;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Double getPrice() {
		return price;
	}
	
	public void setPrice(Double price) {
		this.price = price;
	}
	
	public String getImgUrl() {
		return imgUrl;
	}
	
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Instant getCreatedAt() {
		return createdAt;
	}
	
	public Instant getUpdatedAt() {
		return updatedAt;
	}
	
	@PrePersist
	public void prePersist() {
		createdAt = Instant.now();
	}
	
	@PreUpdate
	public void preUpdate() {
		updatedAt = Instant.now();
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		return Objects.equals(id, other.id);
	}
		
}
