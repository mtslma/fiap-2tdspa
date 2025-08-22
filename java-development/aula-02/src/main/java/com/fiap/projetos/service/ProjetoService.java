package com.fiap.projetos.service;

import com.fiap.projetos.dto.ProjetoDTO;
import com.fiap.projetos.entity.Projeto;
import com.fiap.projetos.repository.ProjetoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProjetoService {

    private final ProjetoRepository projetoRepository;

    private TempoService tempoService;


    private ProjetoDTO toDTO(Projeto entity) {
        ProjetoDTO projetoDTO = ProjetoDTO.builder()
                .id(entity.getId())
                .nome(entity.getNome())
                .responsavel(entity.getResponsavel())
                .dataCriacao(entity.getDataCriacao())
                .build();
        return projetoDTO;
    }

    private Projeto toEntity(ProjetoDTO projetoDTO){
        Projeto projeto = new Projeto();
        projeto.setId(projetoDTO.getId());
        projeto.setNome(projetoDTO.getNome());
        projeto.setResponsavel(projetoDTO.getResponsavel());
        return projeto;
    }

    public ProjetoDTO findById(Long id) {
        Optional<Projeto> projetoOptional = projetoRepository.findById(id);
        if (projetoOptional.isPresent()) {
            return toDTO(projetoOptional.get());
        }
        return null;
    }

    public ProjetoDTO criar(ProjetoDTO projetoDTO) {
        projetoDTO.setDataCriacao(tempoService.agora());
        projetoRepository.save(toEntity(projetoDTO));
        return projetoDTO;
    }

    public ProjetoDTO alterar(ProjetoDTO projetoDTO) {
        projetoRepository.save(toEntity(projetoDTO));
        return projetoDTO;
    }

    public List<ProjetoDTO> listar() {
        return projetoRepository.findAll()
                .stream()
                .map(p -> toDTO(p))
                .collect(Collectors.toList());
    }

    public void apagar(Long id) {
        projetoRepository.deleteById(id);
    }
}
