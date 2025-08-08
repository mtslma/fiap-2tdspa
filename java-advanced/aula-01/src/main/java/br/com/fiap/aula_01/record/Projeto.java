package br.com.fiap.aula_01.record;

// O record simplifica o processo de criação de uma classe imutável
public record Projeto(int id, String nome, String responsavel) {
    public Projeto {
    }
}
