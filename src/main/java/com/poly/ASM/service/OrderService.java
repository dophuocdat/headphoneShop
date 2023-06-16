package com.poly.ASM.service;

import java.util.List;

import com.poly.ASM.entity.Order;
import com.poly.ASM.entity.OrderDetails;


public interface OrderService {

    Order createOrder(Order order);

    List<Order> getAll();

    Order createOrder(Long id, Order order);

    void deleteOrder(Long id);
}
