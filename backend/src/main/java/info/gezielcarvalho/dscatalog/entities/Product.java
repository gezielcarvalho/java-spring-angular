package info.gezielcarvalho.dscatalog.entities;

import java.io.Serializable;
import java.time.Instant;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "`Products`")
public class Product implements Serializable {

	/**
	 * 
	 */
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
	@Column(name = "`CategoryId`")
	private Long categoryId;
	@Column(name ="`Description`", length = 512)
	private String description;
	@Column(name = "`CreatedAt`", columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant	 createdAt;
	@Column(name = "`UpdatedAt`", columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private Instant	 updatedAt;	
}
