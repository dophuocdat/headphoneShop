package com.poly.ASM.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.poly.ASM.entity.Order;
import com.poly.ASM.entity.OrderDetails;


@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    
}
