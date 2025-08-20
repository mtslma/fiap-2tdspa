package br.com.fiap.exercicio_ecommerce.service;

import br.com.fiap.exercicio_ecommerce.dto.ShoppingCartDTO;
import br.com.fiap.exercicio_ecommerce.dto.ShoppingCartItemDTO;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class CartService {

    Map<UUID, ShoppingCartDTO> carts = new HashMap<>();

    public ShoppingCartDTO create(ShoppingCartDTO cartDTO) {
         cartDTO.setId(UUID.randomUUID());

         carts.put(cartDTO.getId(), cartDTO);

         return cartDTO;
    }

    public ShoppingCartDTO getCart(UUID cardId) {
        return carts.get(cardId);
    }

    public ShoppingCartDTO updateCart(UUID cartId, ShoppingCartItemDTO item) {
        ShoppingCartDTO cart = this.getCart(cartId);
        cart.getCartItems().add(item);
        return cart;
    }

    public ShoppingCartDTO updateCartItem(UUID id, ShoppingCartItemDTO item) {
        ShoppingCartDTO cart = this.getCart(id);
        cart.getCartItems().forEach(p -> {
            if (p.getProductCode() == item.getProductCode()){
                p.setQuantity(item.getQuantity() + 1);
            }
        });
        return cart;
    }

    public ShoppingCartDTO deleteItem(UUID id, ShoppingCartDTO item){
        return null;
    }
}
