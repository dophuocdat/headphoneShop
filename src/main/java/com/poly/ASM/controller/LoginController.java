package com.poly.ASM.controller;

import com.poly.ASM.entity.Customer;
import com.poly.ASM.entity.DTO.LoginRequest;
import com.poly.ASM.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    private CustomerService customerService;

    @Autowired
    public LoginController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        Customer customer = customerService.login(loginRequest.email(), loginRequest.password());
        if (customer != null) {
            customer.setStatus(true);
            customerService.save(customer);
            return ResponseEntity.ok(customer.getCustomerId().toString());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    @PutMapping("/logout")
    public ResponseEntity<String> logout(@RequestParam Long id) {
        Customer customer = customerService.findOneCustomer(id);
        if (customer != null) {
            customer.setStatus(false);
            customerService.save(customer);
            return ResponseEntity.ok().body(id + "");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Customer not found");

    }
}
