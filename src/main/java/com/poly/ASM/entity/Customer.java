package com.poly.ASM.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "customer")
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties("customer")
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
    
    @OneToMany(mappedBy = "customer")
    @JsonIgnore
    @ToString.Exclude
    private List<Order> orders;

    @OneToMany(mappedBy = "customer")
    private List<RateProduct> rateProducts;

    @OneToMany(mappedBy = "customer")
    private List<ReviewProduct> reviewProducts;

    @OneToMany(mappedBy = "customer")
    private List<Wishlist> wishlists;

}
