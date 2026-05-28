package com.mespractice.production.controller;

import com.mespractice.production.dto.ProductionOrderResponse;
import com.mespractice.production.service.ProductionOrderService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/production-orders")
@RequiredArgsConstructor
public class ProductionOrderController {

    private final ProductionOrderService productionOrderService;

    @GetMapping
    public List<ProductionOrderResponse> findRecentOrders() {
        return productionOrderService.findRecentOrders();
    }
}
