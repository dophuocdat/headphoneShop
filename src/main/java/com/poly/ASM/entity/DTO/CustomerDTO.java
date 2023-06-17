package com.poly.ASM.entity.DTO;

public record CustomerDTO(
         Long customerId,
         String name,
         String email,
         String password,
         String phone,
         String address
) {
}
