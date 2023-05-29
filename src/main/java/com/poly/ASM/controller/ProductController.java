package com.poly.ASM.controller;

import com.poly.ASM.entity.Product;
import com.poly.ASM.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class ProductController {

    ProductService productService;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/product")
    public Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);



    }

}
