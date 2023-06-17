package com.poly.ASM.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.poly.ASM.entity.Order;
import com.poly.ASM.entity.OrderDetails;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT o FROM Order o WHERE o.customer.id = ?1")
    Page<Order> findByCustomerId(Long id, Pageable pageable);

    @Query("SELECT o FROM Order o WHERE o.customer.id = ?1")
    Optional<Order> findByCustomerId(Long id);

}
