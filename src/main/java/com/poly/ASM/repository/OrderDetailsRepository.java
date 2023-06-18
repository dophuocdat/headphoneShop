package com.poly.ASM.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.poly.ASM.entity.OrderDetails;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {


    @Query(value = "SELECT * FROM `order_details`  WHERE order_id = :orderId", nativeQuery = true)
    Page<OrderDetails> findByOrderDetails(@Param("orderId") Long orderId, Pageable pageable);

}
