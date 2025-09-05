package br.com.fiap.exercicio_ecommerce.controller;

import br.com.fiap.exercicio_ecommerce.dto.ProductDTO;
import br.com.fiap.exercicio_ecommerce.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<?> listProducts(){
        List<ProductDTO> productDTOList = productService.list();
        return new ResponseEntity<>(productDTOList, HttpStatus.OK);
    }
}
