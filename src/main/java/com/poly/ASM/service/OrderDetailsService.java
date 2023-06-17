package com.poly.ASM.service;

import java.util.List;

import com.poly.ASM.entity.OrderDetails;

public interface OrderDetailsService {

    List<OrderDetails> getOrderDetails();

    void createOrderDetails(Long orderId, OrderDetails orderDetailsOrder);

    void deleteOrderDetails(Long id);
    
}
