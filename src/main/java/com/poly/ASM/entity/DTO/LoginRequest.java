package com.poly.ASM.entity.DTO;

public record LoginRequest(
        Long id,
        String email,
        String password) {
}
