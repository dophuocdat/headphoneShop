package com.poly.ASM.controller;

import com.poly.ASM.entity.Customer;
import com.poly.ASM.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/customers")
    public Customer saveCustomer(@RequestBody Customer customer) {
        customer.setRoles("USER");
        return customerService.save(customer);
    }

    @PutMapping("/information/{id}")
    public Customer logout(@PathVariable Long id) {
        return customerService.findOneCustomer(id);
    }

    @GetMapping("/information/{id}")
    public Customer getOneCustomer(@PathVariable Long id) {
        return customerService.findOneCustomer(id);
    }

    @GetMapping("/customers")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @DeleteMapping("/customer/{id}")
    public String deleteCustomer(@PathVariable Long id) {
        return customerService.deleteCustomer(id);
    }

    @PutMapping("/customer/{id}")
    public Customer updateCustomer(@PathVariable Long id,
            @RequestBody Customer newCustomer) {
        return customerService.updateCustomer(id, newCustomer);
    }

}
