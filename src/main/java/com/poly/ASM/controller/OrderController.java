package com.poly.ASM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poly.ASM.entity.Order;
import com.poly.ASM.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {
    
    OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("")
    public List<Order> getAll(){
        return orderService.getAll();
    } 

    
}
