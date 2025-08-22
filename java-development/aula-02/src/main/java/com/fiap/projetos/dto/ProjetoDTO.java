package com.fiap.projetos.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

import java.time.Instant;

@Data
@Builder
public class ProjetoDTO {

    @NonNull
    private Long id;
    private String nome;
    private String responsavel;
    private Instant dataCriacao;
}

