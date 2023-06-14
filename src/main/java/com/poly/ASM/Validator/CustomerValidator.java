package com.poly.ASM.Validator;

import org.springframework.context.annotation.Configuration;

import com.poly.ASM.entity.Customer;

@Configuration
public class CustomerValidator {

    private static void validateRequiredFields(Customer customer) throws IllegalArgumentException {
        if (isNullOrEmpty(customer.getName()) ||
                isNullOrEmpty(customer.getEmail()) ||
                isNullOrEmpty(customer.getPassword()) ||
                isNullOrEmpty(customer.getPhone()) ||
                isNullOrEmpty(customer.getAddress())) {
            throw new IllegalArgumentException("All fields are required");
        }
    }

    public static void validateCustomer(Customer customer) throws IllegalArgumentException {
        validateRequiredFields(customer);
        validatePhone(customer.getPhone());
        validatePassword(customer.getPassword());
    }

    private static boolean isNullOrEmpty(String str) {
        return str == null || str.trim().isEmpty();
    }

    private static void validatePhone(String phone) throws IllegalArgumentException {
        if (phone.length() < 10 || phone.length() > 12) {
            throw new IllegalArgumentException("Phone number should be between 10 and 12 characters");
        }
    }

    private static void validatePassword(String password) throws IllegalArgumentException {
        if (password.length() < 6) {
            throw new IllegalArgumentException("Password should have at least 6 characters");
        }
    }
}
