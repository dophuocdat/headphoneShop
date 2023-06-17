package com.poly.ASM.service.impl;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.poly.ASM.entity.Brand;
import com.poly.ASM.entity.Product;
import com.poly.ASM.repository.BrandRepository;
import com.poly.ASM.repository.ProductRepository;
import com.poly.ASM.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public void save(Product product) {
        productRepository.save(product);
    }

    @Override
    public Page<Product> getPageable(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Page<Product> findProduct(Pageable pageable,
            Optional<Double> priceMin, Optional<Double> priceMax, Optional<String> productName,
            Optional<String> brand) {
        Double min = priceMin.orElse(1D);
        Double max = priceMax.orElse(Double.MAX_VALUE);
        String name = productName.orElse("");
        String nameBrand = brand.orElse("");
        System.out.println(" min: " + min + " max: " + max + " name: " + name
                + " nameBrand: " + nameBrand);
        System.out.println(productRepository.findProduct(pageable, min, max, name, nameBrand));
        return productRepository.findProduct(pageable, min, max, name, nameBrand);
    }

    @Override
    public List<String> saveFiles(List<MultipartFile> multipartFiles) throws IOException {
        List<String> fileNames = new ArrayList<>();

        Path uploadDirectory = Paths.get("frontend/src/image");
        if (!Files.exists(uploadDirectory)) {
            Files.createDirectories(uploadDirectory);
        }

        for (MultipartFile multipartFile : multipartFiles) {
            String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
            fileNames.add(fileName);

            try (InputStream inputStream = multipartFile.getInputStream()) {
                Path filePath = uploadDirectory.resolve(fileName);
                Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
            } catch (IOException e) {
                throw new IOException("Error saving uploaded file: " + fileName, e);
            }
        }
        return fileNames;
    }

    @Override
    public Product findProduct(Long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            return product.get();
        }
        return productRepository.findById(id).get();
    }

    @Override
    public Product updateProduct(long id, Product product) {
        // check id exits
        Product productUpdate = productRepository.findById(id).get();
        productUpdate.setName(product.getName());
        productUpdate.setPrice(product.getPrice());
        productUpdate.setDescription(product.getDescription());
        productUpdate.setImageUrl(product.getImageUrl());
        return productRepository.save(productUpdate);

    }

    @Override
    public ResponseEntity<String> deleteProduct(long id) {
        productRepository.deleteById(id);
       return ResponseEntity.ok().body("Delete success");
    }

   
}
