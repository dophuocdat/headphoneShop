package com.poly.ASM.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class CustomerNotFoundAdvice {


    @ResponseBody
    @ExceptionHandler(UserPrincipalNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(CustomerNotFound exception){
        Map<String, String >errorMap  = new HashMap<>();
        errorMap.put("error", exception.getMessage());
        return errorMap;
    }
}
