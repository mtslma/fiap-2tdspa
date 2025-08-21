package br.com.fiap.aula_01.controller;

import br.com.fiap.aula_01.dto.ProjetoDTO;
import br.com.fiap.aula_01.entity.Projeto;
import br.com.fiap.aula_01.service.ProjetoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projetos")
public class ProjetoController {

    // Injetando o service no controller por meio de construtor
    private final ProjetoService projetoService;

    public ProjetoController(ProjetoService projetoService) {
        this.projetoService = projetoService;
    }



    // POST - Criando um novo projeto
    // http://localhost:8000/api/projetos
    @PostMapping
    public ResponseEntity<?> criar(@RequestBody ProjetoDTO projetoDTO){

        // Verificando se o projeto já existe
        if (projetoService.findById(projetoDTO.getId()) != null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        };

        // Chamando o projeto
        projetoService.criar(projetoDTO);
        return new ResponseEntity<>(projetoDTO, HttpStatus.CREATED);
    }



    // GET - Listando todos os projetos
    // http://localhost:8000/api/projetos
    @GetMapping
    public List<Projeto> listar(){
        return projetoService.listar();
    }



    // GET - Buscando um projeto por ID
    // http://localhost:8000/api/projetos/1
    @GetMapping("/{id}")
    public ResponseEntity<?> buscar(@PathVariable Long id){

        ProjetoDTO projeto = projetoService.findById(id);

        if (projeto != null){
            return new ResponseEntity<>(projeto, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }



    // PUT - Atualizando um projeto
    // http://localhost:8000/api/projetos/1
    @PutMapping("/{id}")
    public ResponseEntity<?> alterar(@PathVariable Long id, @RequestBody ProjetoDTO projetoDTO){

        // Verificando se o projeto já existe
        if (projetoService.findById(projetoDTO.getId()) != null){
            projetoService.alterar(projetoDTO);
            return new ResponseEntity<>(projetoDTO, HttpStatus.OK);
        };

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }



    // DELETE - Deletando um projeto
    // http://localhost:8000/api/projetos/1
    @DeleteMapping("/{id}")
    public ResponseEntity<?> apagar(@PathVariable Long id){
        // Verificando se o projeto já existe
        if (projetoService.findById(id) != null){
            projetoService.apagar(id);
            return new ResponseEntity<>(HttpStatus.OK);
        };

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

