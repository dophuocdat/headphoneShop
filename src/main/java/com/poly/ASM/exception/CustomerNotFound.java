package com.poly.ASM.exception;

public class CustomerNotFound extends RuntimeException {

    public CustomerNotFound(Long id) {
        super("Could not found the user with id " + id);
    }
}
