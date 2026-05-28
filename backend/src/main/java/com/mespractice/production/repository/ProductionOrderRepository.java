package com.mespractice.production.repository;

import com.mespractice.production.domain.ProductionOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductionOrderRepository extends JpaRepository<ProductionOrder, Long> {
}
