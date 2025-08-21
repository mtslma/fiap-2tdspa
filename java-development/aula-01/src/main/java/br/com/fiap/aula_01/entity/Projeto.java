package br.com.fiap.aula_01.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Entity
@Table(name = "tb_projeto")
@Data
public class Projeto {

    @Id
    private Long id;

    @Column(name="nome_projeto", length= 100, nullable = false)
    private String nome;

    @Column(nullable = false)
    private String responsavel;

    @CreationTimestamp
    private Instant dataCriacao;

}
