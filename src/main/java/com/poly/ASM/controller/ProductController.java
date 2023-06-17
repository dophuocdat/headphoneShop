package com.poly.ASM.controller;

import com.poly.ASM.entity.Brand;
import com.poly.ASM.entity.Product;
import com.poly.ASM.service.BrandService;
import com.poly.ASM.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("products")
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    BrandService brandService;

    @GetMapping("")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("addProduct")
    public ResponseEntity<Product> uploadFile(
            @RequestParam("file") List<MultipartFile> multipartFiles,
            @RequestParam("name") String name,
            @RequestParam("desc") String description,
            @RequestParam("price") BigDecimal price,
            @RequestParam("oldPrice") BigDecimal oldPrice,
            @RequestParam("brand") String brand) throws IOException {
        List<String> fileNames = productService.saveFiles(multipartFiles);

        Optional<Brand> optionalBrand = brandService.findBrandByName(brand);

        if (optionalBrand.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Brand tempBrand = optionalBrand.get();
        Product product = new Product();

        product.setImageUrl(fileNames);
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setPriceOld(oldPrice);
        product.setBrand(tempBrand);

        productService.save(product);

        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/AllProducts")
    public Page<Product> getBrandName(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "pageSize", defaultValue = "5") int size,
            @RequestParam("sortField") Optional<String> sortField,
            @RequestParam("sortDirection") Optional<String> sortDirection) {
        /* System.out.println(sortField.get()); */
        // System.out.println(sortDirection.get());

        Sort sort = Sort.by(Sort.Direction.ASC, sortField.orElse("productId"));
        Pageable pageable = PageRequest.of(page, size, sort);
        // System.out.println(productService.getPageable(pageable));
        return productService.getPageable(pageable);
    }

    // search
    @GetMapping("/search")
    public Page<Product> searchProduct(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "pageSize", defaultValue = "5") int size,
            @RequestParam("sortField") Optional<String> sortField,
            @RequestParam("sortDirection") Optional<String> sortDirection,
            @RequestParam("productName") Optional<String> productName,
            @RequestParam("priceMin") Optional<Double> priceMin,
            @RequestParam("priceMax") Optional<Double> priceMax,
            @RequestParam("brand") Optional<String> brand) {
        Sort sort = Sort.by(Sort.Direction.ASC, sortField.orElse("productId"));
        Pageable pageable = PageRequest.of(page, size, sort);

        return productService.findProduct(pageable, priceMin, priceMax, productName, brand);
    }

    @GetMapping("/product/{id}")
    public Product findProduct(@PathVariable Long id) {
        return productService.findProduct(id);
    }

    @PutMapping("/updateProduct/{id}")
    public Product updateProduct(
            @PathVariable long id,
            @RequestBody Product product) {
        System.out.println(product);
        return productService.updateProduct(id, product);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable long id) {
        return productService.deleteProduct(id);
    }
}
