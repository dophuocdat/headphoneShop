package com.poly.ASM.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import com.poly.ASM.entity.Brand;

public interface BrandService {

	List<Brand> getAllBrands();

    Brand save(Brand newBrand);

    //List<Brand> findByBrandName();
    public List<String> getAllBrandName();

    Optional<Brand> findBrandByName(String brand);

    Page<Brand> getAllBrandNames(Pageable pageable);
    //Page<Brand> findBrandByPageAndSort(Pageable pageable, Sort sort);
/*
    Page<Brand> searchBrand(Pageable pageable, Optional<String> search);*/
}
