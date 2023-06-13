package com.poly.ASM.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.poly.ASM.entity.Brand;
import com.poly.ASM.repository.BrandRepository;
import com.poly.ASM.repository.ProductRepository;
import com.poly.ASM.service.BrandService;

import lombok.AllArgsConstructor;

@Service
public class BrandServiceImpl implements BrandService {

    BrandRepository brandRepository;
    ProductRepository productRepository;

    @Autowired
    public BrandServiceImpl(BrandRepository brandRepository, ProductRepository productRepository) {
        this.brandRepository = brandRepository;
        this.productRepository = productRepository;
    }

    @Override
    public List<Brand> getAllBrands() {
        return brandRepository.findAll();
    }

    // @Override
    public Brand save(Brand newBrand) {
        return brandRepository.save(newBrand);
    }

    @Override
    public Optional<Brand> findBrandByName(String brand) {
        return brandRepository.findBrandByName(brand);
    }

    @Override
    public List<String> getAllBrandName() {
        return brandRepository.findAllNameBrand();
    }

    @Override
    public Page<Brand> getAllBrandNames(Pageable pageable) {
        return brandRepository.findAll(pageable);
    }

 /*    @Override
    public Page<Brand> searchBrand(Pageable pageable, Optional<String> search) {
        return brandRepository.searchBrandName(pageable, search.orElse(""));
    } */

  
}
