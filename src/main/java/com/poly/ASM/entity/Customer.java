package com.poly.ASM.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "customer")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;

    private String name;
    private String email;
    private String password;
    private String phone;
    private String address;
    private String roles;
    private String avatar;
    private boolean status;
    
    @OneToMany(mappedBy = "customerId")
    private List<Order> orders;

    @OneToMany(mappedBy = "customer")
    private List<RateProduct> rateProducts;

    @OneToMany(mappedBy = "customer")
    private List<ReviewProduct> reviewProducts;

    @OneToMany(mappedBy = "customer")
    private List<Wishlist> wishlists;

}
