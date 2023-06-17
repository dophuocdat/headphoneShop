package com.poly.ASM.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.poly.ASM.entity.Wishlist;

@Repository
public interface  WishlistRepository extends JpaRepository<Wishlist, Long> {


    @Query("SELECT w FROM Wishlist w WHERE w.customer.id = ?1")
    Optional<Wishlist> findByCustomerId(Long productId);


    @Query("SELECT w FROM Wishlist w WHERE w.customer.id = :customerId ORDER BY w.id ASC")
    Optional<Wishlist> findFirstByCustomerId(Long customerId);
    
}
