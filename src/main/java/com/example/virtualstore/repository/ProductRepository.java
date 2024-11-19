package com.example.virtualstore.repository;

import com.example.virtualstore.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // Custom query methods (if needed)
}
