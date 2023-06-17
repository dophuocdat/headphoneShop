package com.poly.ASM.service;

import com.poly.ASM.entity.Brand;
import com.poly.ASM.entity.Product;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface ProductService {
    List<Product> getAllProducts();

    void save(Product product);

    Page<Product> getPageable(Pageable pageable);

    Page<Product> findProduct(Pageable pageable,
            Optional<Double> priceMin, Optional<Double> priceMax, Optional<String> productName, Optional<String> brand);

    public List<String> saveFiles(List<MultipartFile> multipartFiles) throws IOException;

    Product findProduct(Long id);

    Product updateProduct(long id, Product product);

    ResponseEntity<String> deleteProduct(long id);

}
