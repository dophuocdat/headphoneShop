package com.poly.ASM.service;

import com.poly.ASM.entity.Customer;

import java.util.List;

public interface CustomerService {
    Customer save(Customer customer);

    Customer findOneCustomer(Long id);

    List<Customer> getAllCustomers();

    Customer updateCustomer(Long id, Customer newCustomer);

    String deleteCustomer(Long id);

    Customer login(String email, String password);
}
