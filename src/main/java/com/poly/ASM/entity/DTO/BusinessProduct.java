package com.poly.ASM.entity.DTO;

import com.poly.ASM.entity.Customer;
import com.poly.ASM.entity.Product;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "business_product")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BusinessProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}