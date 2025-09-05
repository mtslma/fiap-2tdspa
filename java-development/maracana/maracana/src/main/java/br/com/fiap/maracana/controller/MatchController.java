package br.com.fiap.maracana.controller;

import br.com.fiap.maracana.dto.MatchDTO;
import br.com.fiap.maracana.service.MatchService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/matches")
@AllArgsConstructor
public class    MatchController {

    // Injetando a dependência do service
    private final MatchService matchService;

    @GetMapping
    public ResponseEntity<?> getMatches(){
        try {
            return new ResponseEntity<>(matchService.getMatches(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMatchById(@PathVariable UUID id){
        try {
            return new ResponseEntity<>(matchService.getMatchById(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<?> createMatch(@RequestBody MatchDTO matchDTO){
        try{
            return new ResponseEntity<>(matchService.createMatch(matchDTO), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateMatch(@RequestBody MatchDTO matchDTO, @PathVariable UUID id){
        try{
            return new ResponseEntity<>(matchService.updateMatch(matchDTO, id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMatch(@PathVariable UUID id) {
        try {
            matchService.deleteMatch(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
