package com.poly.ASM.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.poly.ASM.entity.Order;
import com.poly.ASM.entity.OrderDetails;


public interface OrderService {

    Order createOrder(Order order);

    List<Order> getAll();

    Order createOrder(Long id, Order order);

    void deleteOrder(Long id);

    Page<Order> getOrder(Long id, Pageable pageable);


    Page<OrderDetails> getOrderDetails(Long orderId, Pageable pageable);
}
