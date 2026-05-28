package com.mespractice.production.dto;

import com.mespractice.production.domain.ProductionOrder;
import com.mespractice.production.domain.ProductionOrderStatus;
import java.time.LocalDate;

public record ProductionOrderResponse(
        Long id,
        String orderNo,
        String itemName,
        int targetQuantity,
        LocalDate dueDate,
        ProductionOrderStatus status
) {

    public static ProductionOrderResponse from(ProductionOrder order) {
        return new ProductionOrderResponse(
                order.getId(),
                order.getOrderNo(),
                order.getItemName(),
                order.getTargetQuantity(),
                order.getDueDate(),
                order.getStatus()
        );
    }
}
