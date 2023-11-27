package info.gezielcarvalho.dscatalog.dto;

import info.gezielcarvalho.dscatalog.entities.Category;
import info.gezielcarvalho.dscatalog.entities.Product;

public class ProductDTO {
	
	private Long id;
	private String name;
	private Double price;
	private String imgUrl;
	private CategoryDTO category;
	private String description;
	
	public ProductDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductDTO(Long id, String name, Double price, String imgUrl, Category category, String description) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.imgUrl = imgUrl;
		this.category = new CategoryDTO(category);
		this.description = description;
	}
	
	public ProductDTO(Product product) {
		this.id = product.getId();
		this.name = product.getName();
		this.price = product.getPrice();
		this.imgUrl = product.getImgUrl();
		this.category = new CategoryDTO(product.getCategory());
		this.description = product.getDescription();
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

	public CategoryDTO getCategory() {
		return category;
	}

	public void setCategory(CategoryDTO category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
	
	
}
