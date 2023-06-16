package com.poly.ASM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.poly.ASM.entity.Order;
import com.poly.ASM.service.OrderService;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("")
    public List<Order> getAll() {
        System.out.println(orderService.getAll());
        return orderService.getAll();
    }

    @PostMapping("/{idCustomer}")
    public Order createOrder(@PathVariable Long idCustomer, @RequestBody Order order) {

        return orderService.createOrder(idCustomer, order);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.ok().body("Delete success");
    }

}
