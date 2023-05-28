package com.poly.ASM.service.impl;

import com.poly.ASM.entity.CustomerEntity;
import com.poly.ASM.repository.CustomerRepository;
import com.poly.ASM.service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {



    private CustomerRepository customerRepository;

    @Override
    public CustomerEntity save(CustomerEntity customer) {
        return customerRepository.save(customer);
    }
}
