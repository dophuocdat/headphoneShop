package com.poly.ASM.service.impl;

import java.util.List;
import java.util.Optional;

import com.poly.ASM.entity.Customer;
import com.poly.ASM.entity.OrderDetails;
import com.poly.ASM.repository.CustomerRepository;
import com.poly.ASM.repository.OrderDetailsRepository;
import com.poly.ASM.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poly.ASM.entity.Order;
import com.poly.ASM.repository.OrderRepository;

import com.poly.ASM.service.OrderService;

import jakarta.transaction.Transactional;

@Service
public class OrderServiceImpl implements OrderService {

    OrderRepository orderRepository;
    CustomerRepository customerRepository;

    OrderDetailsRepository orderDetailsRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository, CustomerRepository customerRepository,OrderDetailsRepository orderDetailsRepository) {
        this.orderRepository = orderRepository;
        this.customerRepository = customerRepository;
        this.orderDetailsRepository = orderDetailsRepository;
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAll() {
        return orderRepository.findAll();
    }

    @Override
    public Order createOrder(Long id, Order order) {
        Optional<Customer> existingCustomer = customerRepository.findById(id);
        Optional<Order> existingOrder = orderRepository.findByCustomerId(id);
        System.out.println("order: " + existingOrder);
        if (!existingOrder.isPresent()) {
            order.setCustomer(existingCustomer.get());
            orderRepository.save(order);

            return order;
        } else {
            return existingOrder.get();
        }

    }

    @Override
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    @Override
    public Page<Order> getOrder(Long id, Pageable pageable) {
        return orderRepository.findByCustomerId(id, pageable);
    }

   @Override
    public Page<OrderDetails> getOrderDetails(Long orderId, Pageable pageable) {
       return orderDetailsRepository.findByOrderDetails(orderId, pageable);
   }

}
