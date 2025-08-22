package com.fiap.projetos.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "tb_recurso")
@Data
public class Recurso {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "nome_recurso")
    private String nome;

    @Column(name = "identificacao_legal", unique = true)
    private String identificacaoLegal;

    @Column(name = "custo_mensal", precision = 10, scale = 2)
    private BigDecimal custoMensal;


}
