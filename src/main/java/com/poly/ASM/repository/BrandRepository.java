package com.poly.ASM.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.poly.ASM.entity.Brand;
import com.poly.ASM.entity.Product;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {

    @Query("select b.brandName from Brand b")
    List<String> findAllNameBrand();

    @Query("select b from Brand b where b.brandName = ?1")
    Optional<Brand> findBrandByName(String brand);

  /*  @Query("select b from Brand b where b.brandName like %:brandName%")
    Page<Brand> searchBrandName(Pageable pageable, @Param("brandName") String string);*/

   // Page<Brand> findByBrandContainingIgnoreCase(String searchTerm,Pageable pageable);

}
