package com.mespractice.production.service;

import com.mespractice.production.dto.ProductionOrderResponse;
import com.mespractice.production.mapper.ProductionOrderMapper;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductionOrderService {

    private final ProductionOrderMapper productionOrderMapper;

    public List<ProductionOrderResponse> findRecentOrders() {
        return productionOrderMapper.findRecentOrders();
    }
}
