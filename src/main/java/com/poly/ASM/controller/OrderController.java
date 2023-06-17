package com.poly.ASM.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
        // System.out.println(orderService.getAll());
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

    @GetMapping("/{id}")
    public Page<Order> getOrder(
            @PathVariable Long id,
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "pageSize", defaultValue = "5") int size,
            @RequestParam("sortField") Optional<String> sortField,
            @RequestParam("sortDirection") Optional<String> sortDirection) {
        Sort sort = Sort.by(Sort.Direction.DESC, sortField.orElse("orderId"));
        Pageable pageable = PageRequest.of(page, size, sort);

        return orderService.getOrder(id, pageable);
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<String> deleteOrderDetails(@PathVariable("id") Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.ok().body("Delete success");
    }

}
