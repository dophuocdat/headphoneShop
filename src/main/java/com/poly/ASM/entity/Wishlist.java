package com.poly.ASM.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "wishlist")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Wishlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishListId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToMany
    @JoinTable(
            name = "wishlist_product",
            joinColumns = @JoinColumn(name="wishlist_id"),
            inverseJoinColumns = @JoinColumn(name="product_id")
    )
    private List<Product> products;
}
