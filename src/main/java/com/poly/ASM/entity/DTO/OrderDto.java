package com.poly.ASM.entity.DTO;

import com.poly.ASM.entity.Order;
import com.poly.ASM.entity.OrderDetails;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
    private Order order;
    private Page<OrderDetails> orderDetails;
}
