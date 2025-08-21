package br.com.fiap.aula_01.service;

import br.com.fiap.aula_01.dto.ProjetoDTO;
import br.com.fiap.aula_01.entity.Projeto;
import br.com.fiap.aula_01.repository.ProjetoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProjetoService {

    private final ProjetoRepository projetoRepository;

    // Injetando o serviço de tempo no service por meio de construtor
    public final TempoService tempoService;


    private ProjetoDTO toEntity(Projeto entity){
        ProjetoDTO projetoDTO = ProjetoDTO.builder()
                .id(entity.getId())
                .nome(entity.getNome())
                .responsavel(entity.getResponsavel())
                .dataCriacao(entity.getDataCriacao())
                .build();
    }

    public ProjetoDTO findById(Long id){
        Optional<Projeto> projetoOptional = projetoRepository.findById(id);

        if (projetoOptional.isPresent()){
            return toEntity(projetoOptional.get());
        }

        return null;
    }

    public void criar(ProjetoDTO projetoDTO) {

        projetoDTO.setDataCriacao(tempoService.agora());

        // Utilizando o padrão builder
        ProjetoDTO projeto = ProjetoDTO.builder()
                .id(projetoDTO.getId())
                .nome(projetoDTO.getNome())
                .responsavel(projetoDTO.getResponsavel())
                .dataCriacao(projetoDTO.getDataCriacao())
                .build();

        projetos.put(projetoDTO.getId(), projeto);
    }

    public void alterar(ProjetoDTO projetoDTO){
        projetos.put(projetoDTO.getId(), projetoDTO);
    }

    public List<Projeto> listar() {
        return projetoRepository.findAll();
    }

    public void apagar(Long id) {
        projetos.remove(id);
    }
}
