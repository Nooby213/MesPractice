package com.mespractice.production.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "production_orders")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProductionOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String orderNo;

    @Column(nullable = false, length = 100)
    private String itemName;

    @Column(nullable = false)
    private int targetQuantity;

    @Column(nullable = false)
    private LocalDate dueDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private ProductionOrderStatus status;

    public ProductionOrder(String orderNo, String itemName, int targetQuantity, LocalDate dueDate) {
        this.orderNo = orderNo;
        this.itemName = itemName;
        this.targetQuantity = targetQuantity;
        this.dueDate = dueDate;
        this.status = ProductionOrderStatus.PLANNED;
    }
}
