package com.fiap.projetos.repository;

import com.fiap.projetos.entity.Projeto;
import com.fiap.projetos.entity.Recurso;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RecursoRepository extends JpaRepository<Recurso, UUID> {


    Recurso findByIdentificacaoLegal(@NotNull String identificacaoLegal);
}
