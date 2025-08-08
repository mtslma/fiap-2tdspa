package br.com.fiap.aula_01.controller;

import br.com.fiap.aula_01.record.Projeto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/projetos")
public class ProjetoController {

    // Usansdo o map
    private Map<Integer, Projeto> map = new HashMap<>();


    // Construindo uma lista básica para armazenar projetos em memória
    // List<ProjetoRecord> lista = new ArrayList<>();

    // http://localhost:8000/api/projetos
    @GetMapping
    public Map<Integer, Projeto> listar(){

        map.put(1, new Projeto(1, "PROJETO 1", "Mateus"));
        map.put(2, new Projeto(2, "PROJETO 2", "Miguel"));

        return map;
    }

    // Método para buscar por chave
    // @GetMapping
    // public Projeto buscarPorId(Integer chave){
    //    return map.get(chave);
    // }
}

