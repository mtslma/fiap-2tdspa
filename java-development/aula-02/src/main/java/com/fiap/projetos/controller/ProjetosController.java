package com.fiap.projetos.controller;

import com.fiap.projetos.dto.ProjetoDTO;
import com.fiap.projetos.entity.Projeto;
import com.fiap.projetos.service.ProjetoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/projetos")
@AllArgsConstructor
public class ProjetosController {

    private ProjetoService projetoService;

    @PostMapping
    public ResponseEntity<?> criar(@RequestBody ProjetoDTO projetoDTO) {

        if (projetoService.findById(projetoDTO.getId()) != null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        ProjetoDTO projeto = projetoService.criar(projetoDTO);
        return new ResponseEntity<>(projeto, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> alterar(@PathVariable Long id, @RequestBody ProjetoDTO projetoDTO){
        if (projetoService.findById(projetoDTO.getId()) != null) {
            ProjetoDTO projeto = projetoService.alterar(projetoDTO);
            return new ResponseEntity<>(projetoDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public List<ProjetoDTO> listar(){
        return projetoService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> listar(@PathVariable Long id){
        ProjetoDTO projeto = projetoService.findById(id);
        if (projeto != null) {
            return new ResponseEntity<>(projeto, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> apagar(@PathVariable Long id){
        if (projetoService.findById(id) != null) {
            projetoService.apagar(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }



}
