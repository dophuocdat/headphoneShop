package com.poly.ASM.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "review_product")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name ="product_id")
    private Product product;

    @Column(name = "review_text", columnDefinition = "TEXT")
    private String reviewText;

    @Temporal(TemporalType.DATE)
    @Column(name = "review_date")
    private Date reviewDate;
}
