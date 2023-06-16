package com.poly.ASM.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poly.ASM.entity.OrderDetails;
import com.poly.ASM.service.OrderDetailsService;

@RestController
@RequestMapping("/orderDetails")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderDetailsController {

    OrderDetailsService orderDetailsService;

    @Autowired
    public OrderDetailsController(OrderDetailsService orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }

    @PostMapping("/{orderId}/create")
    public ResponseEntity<String> createOderDetails(
            @PathVariable("orderId") Long orderId,
            @RequestBody OrderDetails orderDetailsOrder) {
        orderDetailsService.createOrderDetails(orderId,orderDetailsOrder);

        return ResponseEntity.ok().body("Create success");
    }

    @GetMapping("")
    public List<OrderDetails> getOrderDetails() {
        return orderDetailsService.getOrderDetails();
    }

}
