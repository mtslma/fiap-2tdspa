package br.com.fiap.aula_01.repository;

import br.com.fiap.aula_01.entity.Projeto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public abstract class ProjetoRepository implements JpaRepository<Projeto, Long> {
}
