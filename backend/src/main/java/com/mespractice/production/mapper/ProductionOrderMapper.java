package com.mespractice.production.mapper;

import com.mespractice.production.dto.ProductionOrderResponse;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProductionOrderMapper {

    List<ProductionOrderResponse> findRecentOrders();
}
