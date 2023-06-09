package com.poly.ASM.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "promotion_detail")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PromotionDetail {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long promotionDetailId;

    @ManyToOne
    @JoinColumn(name = "promotion_id")
    private Promotion promotion;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private BigDecimal discount;
}
