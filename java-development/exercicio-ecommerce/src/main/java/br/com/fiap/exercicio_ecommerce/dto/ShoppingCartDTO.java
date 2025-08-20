package br.com.fiap.exercicio_ecommerce.dto;

import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
public class ShoppingCartDTO {

    private UUID id;
    private List<ShoppingCartItemDTO> cartItems;
    private String userId;

}
