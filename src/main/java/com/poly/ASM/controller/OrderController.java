package com.poly.ASM.controller;

import java.util.List;
import java.util.Optional;

import com.poly.ASM.entity.DTO.OrderDto;
import com.poly.ASM.entity.OrderDetails;
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
    public OrderDto getOrder(
            @PathVariable Long id,
            @RequestParam(name = "orderPage", defaultValue = "0") int orderPages,
            @RequestParam(name = "orderPageSize", defaultValue = "5") int orderPageSize,
            @RequestParam(name = "orderDetailsPage", defaultValue = "0") int orderDetailsPage,
            @RequestParam(name = "orderDetailsPageSize", defaultValue = "5") int orderDetailsPageSize,
            @RequestParam("sortField") Optional<String> sortField,
            @RequestParam("sortDirection") Optional<String> sortDirection) {
        Sort sort = Sort.by(Sort.Direction.DESC, sortField.orElse("orderId"));

        // Tạo Pageable cho trang Order
        Pageable orderPageable = PageRequest.of(orderPages, orderPageSize, sort);
        Page<Order> orderPage = orderService.getOrder(id, orderPageable);

        OrderDto orderDto = new OrderDto();
        if (orderPage.hasContent()) {
            Order order = orderPage.getContent().get(0);
            orderDto.setOrder(order);

            // Tạo Pageable cho trang OrderDetails
            Pageable orderDetailsPageable = PageRequest.of(orderDetailsPage, orderDetailsPageSize);
            Page<OrderDetails> orderDetailPage = orderService.getOrderDetails(order.getOrderId(), orderDetailsPageable);
            orderDto.setOrderDetails(orderDetailPage);
        }

        return orderDto;
    }

    @GetMapping("check")
    public Page<OrderDetails> getOrderDetails() {
        // Sort sort = Sort.by(Sort.Direction.DESC, sortField.orElse("orderId"));
        Pageable pageable = PageRequest.of(0, 5);
        Page<OrderDetails> orderDetailPage = orderService.getOrderDetails(7l, pageable);
        return orderDetailPage;
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<String> deleteOrderDetails(@PathVariable("id") Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.ok().body("Delete success");
    }

}
