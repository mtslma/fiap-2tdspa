package com.fiap.projetos.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Entity
@Table(name = "tb_projeto")
@Data
public class Projeto {

    @Id
    private Long id;

    @Column(name="nome_projeto", length = 100, nullable = false)
    private String nome;

    @Column(nullable = false)
    private String responsavel;

    @CreationTimestamp
    private Instant dataCriacao;

}
