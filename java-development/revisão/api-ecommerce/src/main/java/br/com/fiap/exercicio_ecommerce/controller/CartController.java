package br.com.fiap.exercicio_ecommerce.controller;

import br.com.fiap.exercicio_ecommerce.dto.ShoppingCartDTO;
import br.com.fiap.exercicio_ecommerce.dto.ShoppingCartItemDTO;
import br.com.fiap.exercicio_ecommerce.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/carts") // always make it plural
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody ShoppingCartDTO cartDTO){

        ShoppingCartDTO cart = cartService.create(cartDTO);

        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> list(@RequestParam UUID id){
        ShoppingCartDTO cart = cartService.getCart(id);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PostMapping("/{id}/items")
    public ResponseEntity<?> addCartItem(@RequestParam UUID id, @RequestBody ShoppingCartItemDTO item){
        ShoppingCartDTO cart = cartService.updateCart(id, item);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PutMapping("/{id}/items")
    public ResponseEntity<?> updateCartItem(@RequestParam UUID id, @RequestBody ShoppingCartItemDTO item){
        ShoppingCartDTO cart = cartService.updateCartItem(id, item);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @DeleteMapping("/{id}/items")
    public ResponseEntity<?> deleteCartItem(@RequestParam UUID id, @RequestBody ShoppingCartItemDTO item){
        ShoppingCartDTO cart = cartService.updateCart(id, item);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }
}
