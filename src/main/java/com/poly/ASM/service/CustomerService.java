package com.poly.ASM.service;

import com.poly.ASM.entity.CustomerEntity;
import org.springframework.stereotype.Service;

public interface CustomerService {
    CustomerEntity save(CustomerEntity customer);
}
