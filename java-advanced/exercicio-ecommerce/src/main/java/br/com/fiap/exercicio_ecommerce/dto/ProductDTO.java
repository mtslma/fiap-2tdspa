package br.com.fiap.exercicio_ecommerce.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@Builder
public class ProductDTO {

    private UUID id;
    private String name;
    private BigDecimal unitPrice;
    private String url;

}
