package com.poly.ASM.service.impl;

import com.poly.ASM.entity.Customer;
import com.poly.ASM.exception.CustomerNotFound;
import com.poly.ASM.repository.CustomerRepository;
import com.poly.ASM.service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {


    private CustomerRepository customerRepository;

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer findOneCustomer(Long id) {
        return customerRepository.findById(id).orElseThrow(() -> new CustomerNotFound(id));

    }

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer updateCustomer(Long id, Customer newCustomer) {
        return customerRepository.findById(id)
                .map(e -> {
                    e.setName(newCustomer.getName());
                    e.setEmail(newCustomer.getEmail());
                    e.setPassword(newCustomer.getPassword());
                    System.out.println(e.toString());
                    return customerRepository.save(e);
                }).orElseGet(() -> {
                    return customerRepository.save(newCustomer);
                });

    }

    @Override
    public String deleteCustomer(Long id) {
        customerRepository.deleteById(id);
        return "customer deleted " + id;
    }

    @Override
    public Customer login(String email, String password) {
        return customerRepository.findByEmailAndPassword(email,password);
    }
}



