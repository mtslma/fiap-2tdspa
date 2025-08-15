package br.com.fiap.exercicio_ecommerce.dto;

import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
public class ShoppingCartItemDTO {

    private UUID productCode;
    private Integer quantity;

}
