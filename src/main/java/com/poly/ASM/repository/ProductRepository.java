package com.poly.ASM.repository;

import com.poly.ASM.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ProductRepository extends JpaRepository<Product,  Long> {
}
