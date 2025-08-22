package com.fiap.projetos.service;

import com.fiap.projetos.dto.RecursoDTO;
import com.fiap.projetos.entity.Recurso;
import com.fiap.projetos.repository.RecursoRepository;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class RecursoService {

    private final RecursoRepository recursoRepository;

    private static RecursoDTO toDTO(Recurso recurso){
        return RecursoDTO.builder()
                .id(recurso.getId())
                .nome(recurso.getNome())
                .identificacaoLegal(recurso.getIdentificacaoLegal())
                .custoMensal(recurso.getCustoMensal())
                .build();
    }

    private static Recurso toEntity(RecursoDTO recursoDTO){
        Recurso recurso = new Recurso();

        recurso.setId(recursoDTO.getId());
        recurso.setNome(recursoDTO.getNome());
        recurso.setIdentificacaoLegal(recursoDTO.getIdentificacaoLegal());
        recurso.setCustoMensal(recursoDTO.getCustoMensal());

        return recurso;
    }

    public List<RecursoDTO> findAll() {

        return recursoRepository.findAll().stream()
                .map(RecursoService::toDTO)
                .collect((Collectors.toList()));
    }

    public RecursoDTO findById(UUID id){
        Optional<Recurso> recurso = recursoRepository.findById(id);

        if (recurso.isPresent()){
            return toDTO(recursoRepository.findById(id).get());
        }
        return null;
    }

    public Recurso save(RecursoDTO recursoDTO) {
        return recursoRepository.save(toEntity(recursoDTO));
    }

    public Recurso findByIdentificacaoLegal(@NotNull String identificacaoLegal) {
        return recursoRepository.findByIdentificacaoLegal(identificacaoLegal);
    }

    public void delete(UUID id) {
        recursoRepository.deleteById(id);
    }

    public RecursoDTO update(RecursoDTO recursoDTO){
        Recurso recurso = recursoRepository.save(toEntity(recursoDTO));
        return recursoRepository.save(recurso);
    }
}
