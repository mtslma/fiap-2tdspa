package br.com.fiap.exercicio_ecommerce.service;

import br.com.fiap.exercicio_ecommerce.dto.ProductDTO;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ProductService {

    public List<ProductDTO> list() {
        List<ProductDTO> list = new ArrayList<>();
        list.add(ProductDTO.builder()
                        .id(UUID.randomUUID())
                        .name("Product A")
                        .unitPrice(new BigDecimal("99.99"))
                        .url("https://cloud.com/img.png")
                .build());

        list.add(ProductDTO.builder()
                        .id(UUID.randomUUID())
                        .name("Product B")
                        .unitPrice(new BigDecimal("99.99"))
                        .url("https://cloud.com/img.png")
                .build());

        return list;
    }
}
