package com.poly.ASM.entity;


import com.poly.ASM.entity.DTO.BusinessProduct;
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

    @Column(name = "business_registered")
    private boolean businessRegistered;

    @Column(name = "business_address")
    private String businessAddress;

    /*
    mappedBy dung de mapping thong qua customer
    cascade = CascadeType.All va orphanRemoval = true de khi user mat thi san pham cung se mat
    * */
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BusinessProduct> businessProducts;

}
