package com.poly.ASM.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poly.ASM.entity.Order;
import com.poly.ASM.entity.OrderDetails;
import com.poly.ASM.repository.OrderDetailsRepository;
import com.poly.ASM.repository.OrderRepository;
import com.poly.ASM.service.OrderDetailsService;

@Service
public class OrderDetailsImpl implements OrderDetailsService {

    OrderDetailsRepository orderDetailsRepository;
    OrderRepository orderRepository;

    @Autowired
    public OrderDetailsImpl(OrderDetailsRepository orderDetailsRepository, OrderRepository orderRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    public List<OrderDetails> getOrderDetails() {
        return orderDetailsRepository.findAll();
    }

    @Override
    public void createOrderDetails(Long id, OrderDetails orderDetails) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found " + id));
        orderDetails.setOrder(order);
        order.getOrderDetails().add(orderDetails);
        orderRepository.save(order);
    }

}
