package com.poly.ASM.service;

import com.poly.ASM.entity.Product;

import java.util.List;

public interface ProductService{
    List<Product> getAllProducts();

    Product addProduct(Product product);
}
