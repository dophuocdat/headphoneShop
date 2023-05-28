package com.poly.ASM.controller;

import com.poly.ASM.entity.CustomerEntity;
import com.poly.ASM.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/customers")
    public CustomerEntity saveCustomer(@RequestBody CustomerEntity customer){
        return customerService.save(customer);
    }
}
