package com.poly.ASM.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "brand")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long brandId;
    private String name;
    private String country;

    @OneToMany(mappedBy = "brand")
    private List<Product> products;

}
