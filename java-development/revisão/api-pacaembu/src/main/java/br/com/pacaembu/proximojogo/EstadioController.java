package br.com.pacaembu.proximojogo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/estadios")
public class EstadioController {

    @GetMapping
    public ResponseEntity<?> proximoJogo(){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
