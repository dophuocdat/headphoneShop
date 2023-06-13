package com.poly.ASM.repository;

import com.poly.ASM.entity.Brand;
import com.poly.ASM.entity.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("select p from Product p where p.price between ?1 and ?2")
    Page<Product> searchPrice(Pageable pageable, double min, double max);

    @Query("SELECT p FROM Product p " +
            "JOIN p.brand b " +
            "WHERE (:name IS NULL OR p.name LIKE %:name%)" +
            "AND (p.price BETWEEN :priceMin AND :priceMax) " +
            "AND (:brand IS NULL OR b.brandName LIKE %:brand%)")

    /*
     * @Query("SELECT p.* " +
     * "FROM product p " + //
     * "INNER JOIN brand b ON b.brand_id = p.brand_id " + //
     * "WHERE (:product IS NULL OR p.product_id = :productId  " + //
     * "  AND (p.price BETWEEN :priceMin AND :priceMax) " + //
     * "  AND (:name IS NULL OR p.name LIKE CONCAT('%', :name, '%')) " + //
     * "  AND (:brand IS NULL OR b.brand_name LIKE CONCAT('%', :brand, '%')) " + //
     * "")
     */
    Page<Product> findProduct(Pageable pageable,Double priceMin, Double priceMax, String name, String brand);

}
