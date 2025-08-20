package br.com.fiap.aula_01.dto;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Builder
@Data
public class ProjetoDTO {
    private Integer id;
    private String nome;
    private String responsavel;
    private Instant dataCriacao;
}

// Exemplo de body para POST
// {
//   "id": 1,
//   "nome": "Projeto 1",
//   "responsavel": "Mateus"
// }
