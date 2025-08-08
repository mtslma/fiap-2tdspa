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
        map.put(3, new Projeto(3, "PROJETO 3", "Lucas"));
        map.put(4, new Projeto(4, "PROJETO 4", "Laura"));
        map.put(5, new Projeto(5, "PROJETO 5", "Ana"));
        map.put(6, new Projeto(6, "PROJETO 6", "Pedro"));
        map.put(7, new Projeto(7, "PROJETO 7", "Juliana"));
        map.put(8, new Projeto(8, "PROJETO 8", "Rafael"));
        map.put(9, new Projeto(9, "PROJETO 9", "Camila"));
        map.put(10, new Projeto(10, "PROJETO 10", "Bruno"));


        return map;
    }

    // Método para buscar por chave
    // @GetMapping
    // public Projeto buscarPorId(Integer chave){
    //    return map.get(chave);
    // }
}

