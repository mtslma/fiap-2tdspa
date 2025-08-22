package com.fiap.projetos.controller;

import com.fiap.projetos.dto.RecursoDTO;
import com.fiap.projetos.entity.Recurso;
import com.fiap.projetos.service.RecursoService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/recursos")
@AllArgsConstructor
public class RecursosController {

    private final RecursoService recursoService;

    @GetMapping
    public List<RecursoDTO> listarRecursos(){
        return recursoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable UUID id){
        RecursoDTO recursoDTO = recursoService.findById(id);

        if (recursoDTO == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(recursoDTO, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> criar(@Valid @RequestBody RecursoDTO recursoDTO,
                                   BindingResult bindingResults) {
        if (bindingResults.hasErrors()) {
            Map<String, String> erros = new HashMap<>();
            for (FieldError erro : bindingResults.getFieldErrors()) {
                erros.put(erro.getField(), erro.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(erros);
        }

        Recurso byIdentificacaoLegal = recursoService.findByIdentificacaoLegal(recursoDTO.getIdentificacaoLegal());

        if (byIdentificacaoLegal != null) {
            return new ResponseEntity<>("Identificador legal já cadastrada em outro recurso", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(recursoService.save(recursoDTO), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> apagarRecurso(@PathVariable UUID id){
        recursoService.delete(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> atualizarRecurso(@PathVariable UUID id,
                                              @Valid @RequestBody RecursoDTO recursoDTO,
                                              BindingResult bindingResults){
        if (bindingResults.hasErrors()) {
            Map<String, String> erros = new HashMap<>();
            for (FieldError erro : bindingResults.getFieldErrors()) {
                erros.put(erro.getField(), erro.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(erros);
        }

        RecursoDTO r = recursoService.findById(id);

        if (r != null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(recursoService.update(recursoDTO), HttpStatus.CREATED);
    }
}

/*
{
    "nome": "asd",
    "identificacaoLegal": "112345513424",
    "custoMensal": 0.1
}
*/