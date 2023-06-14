package com.poly.ASM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poly.ASM.entity.Brand;
import com.poly.ASM.service.BrandService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/brand")
public class BrandController {

    BrandService brandService;

    @Autowired
    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @GetMapping("")
    public List<Brand> getBrand() {
        return brandService.getAllBrands();
    }

    @PostMapping("/addBrand")
    public Brand addBrand(@RequestBody Brand newBrand) {
        return brandService.save(newBrand);
    }

    @GetMapping("/BrandName")
    public List<String> getBrandName() {
        return brandService.getAllBrandName();
    }

   /* @GetMapping("/BrandAndProduct")
    public Page<Brand> getBrandName(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "pageSize", defaultValue = "5") int size,
            @RequestParam("sortField") Optional<String> sortField,
            @RequestParam("sortDirection") Optional<String> sortDirection) {
        *//* System.out.println(sortField.get()); *//*
       // System.out.println(sortDirection.get());
        
        Sort sort = Sort.by(Sort.Direction.ASC, sortField.orElse("products.productId"));
        Pageable pageable = PageRequest.of(page, size, sort);
        return brandService.getAllBrandNames(pageable);
    }

    //search 
    @GetMapping("/search")
    public Page<Brand> searchBrand(
            @RequestParam(name = "page", defaultValue = "3") int page,
            @RequestParam(name = "pageSize", defaultValue = "5") int size,
            @RequestParam("sortField") Optional<String> sortField,
            @RequestParam("sortDirection") Optional<String> sortDirection,
            @RequestParam("search") Optional<String> search) {
        Sort sort = Sort.by(Sort.Direction.ASC, sortField.orElse("products.productId"));
        Pageable pageable = PageRequest.of(page, size, sort);
        return brandService.searchBrand(pageable, search);
    }*/
}
