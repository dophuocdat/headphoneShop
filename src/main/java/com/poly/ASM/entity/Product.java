package com.poly.ASM.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.math.BigDecimal;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "product")
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties("brand")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    private String name;
    private String description;
    private BigDecimal price;
    private BigDecimal priceOld;

    @ManyToOne
    @JoinColumn(name = "brand_id")
   // @JsonIgnoreProperties("brand")
    @JsonIgnore
    private Brand brand;

    @ElementCollection
    @CollectionTable(name = "product_images", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "image_url")
    private List<String> imageUrl;

    @OneToMany
    private List<PromotionDetail> promotionDetails;

}
