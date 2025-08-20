package br.com.fiap.aula_01.service;

import br.com.fiap.aula_01.dto.ProjetoDTO;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@Service
public class ProjetoService {

    // Injetando o serviço de tempo no service por meio de construtor
    public final TempoService tempoService;
    public ProjetoService(TempoService tempoService) {
        this.tempoService = tempoService;
    }

    // Usando o map para armazenar os projetos
    private Map<Integer, ProjetoDTO> projetos = new HashMap<>();
    
    public ProjetoDTO findById(Integer id){
        if (projetos.containsKey(id)) {
            return projetos.get(id);
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

    public Map<Integer, ProjetoDTO> listar() {
        return projetos;
    }

    public void apagar(Integer id) {
        projetos.remove(id);
    }
}
