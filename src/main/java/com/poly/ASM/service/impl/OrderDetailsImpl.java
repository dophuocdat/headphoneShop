package com.poly.ASM.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poly.ASM.entity.Order;
import com.poly.ASM.entity.OrderDetails;
import com.poly.ASM.entity.Product;
import com.poly.ASM.repository.OrderDetailsRepository;
import com.poly.ASM.repository.OrderRepository;
import com.poly.ASM.repository.ProductRepository;
import com.poly.ASM.service.OrderDetailsService;

@Service
public class OrderDetailsImpl implements OrderDetailsService {

    OrderDetailsRepository orderDetailsRepository;
    OrderRepository orderRepository;
    ProductRepository productRepository;

    @Autowired
    public OrderDetailsImpl(OrderDetailsRepository orderDetailsRepository, OrderRepository orderRepository,
            ProductRepository productRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }

    @Override
    public List<OrderDetails> getOrderDetails() {
        return orderDetailsRepository.findAll();
    }

    @Override
    public void createOrderDetails(Long id, OrderDetails orderDetails) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found " + id));
        // Thiết lập mối quan hệ giữa order và orderDetails
        orderDetails.setOrder(order);
        order.getOrderDetails().add(orderDetails);

        // Lưu lại cả order và orderDetails
        // orderRepository.save(order);
        orderDetailsRepository.save(orderDetails);
    }

    @Override
    public void deleteOrderDetails(Long id) {
        orderDetailsRepository.deleteById(id);
    }

    
}
