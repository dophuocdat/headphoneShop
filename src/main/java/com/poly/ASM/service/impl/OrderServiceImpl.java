package com.poly.ASM.service.impl;

import java.util.List;
import java.util.Optional;

import com.poly.ASM.entity.Customer;
import com.poly.ASM.repository.CustomerRepository;
import com.poly.ASM.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poly.ASM.entity.Order;
import com.poly.ASM.repository.OrderRepository;

import com.poly.ASM.service.OrderService;

import jakarta.transaction.Transactional;

@Service
public class OrderServiceImpl implements OrderService {

    OrderRepository orderRepository;
    CustomerRepository customerRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository, CustomerRepository customerRepository) {
        this.orderRepository = orderRepository;
        this.customerRepository = customerRepository;
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
        Optional<Customer> customer = customerRepository.findById(id);
        if(customer.isPresent()){
            order.setCustomer(customer.get());
           return orderRepository.save(order);
        }
        return null;
    }

    @Override
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }


}
