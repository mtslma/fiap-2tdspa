package br.com.fiap.maracana.service;

import br.com.fiap.maracana.dto.MatchDTO;
import br.com.fiap.maracana.model.Match;
import br.com.fiap.maracana.repository.MatchRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MatchService {
    
    // Injetando a dependência do repository
    private final MatchRepository matchRepository;

    // Convertendo entidades para DTO
    private MatchDTO toDTO(Match match){
        MatchDTO matchDTO = MatchDTO.builder()
                .uuid(match.getUuid())
                .adversary(match.getAdversary())
                .stadium(match.getStadium())
                .date(match.getDate())
                .build();

        return matchDTO;
    }

    // Convertendo DTO para entidade
    private Match toEntity(MatchDTO matchDTO){
        Match match = new Match();

        match.setUuid(matchDTO.getUuid());
        match.setAdversary(matchDTO.getAdversary());
        match.setStadium(matchDTO.getStadium());
        match.setDate(matchDTO.getDate());

        return match;
    }

    // Listar todas as partidas
    public List<MatchDTO> getMatches() {
        return matchRepository.findAll()
                .stream().map(this::toDTO).collect(Collectors.toList());
    }

    // Listar uma única partida em específico
    public Optional<Match> getMatchById(UUID uuid){
        return matchRepository.findById(uuid);
    }

    // Criar uma nova partida
    public MatchDTO createMatch(MatchDTO matchDTO){
        return toDTO(matchRepository.save(toEntity(matchDTO)));
    }

    // Excluir uma partida
    public void deleteMatch(UUID uuid){
        matchRepository.deleteById(uuid);
    }

    // Atualizando uma partida
    public MatchDTO updateMatch(MatchDTO matchDTO, UUID id) {
        Optional<Match> existingMatchOptional = matchRepository.findById(id);

        if (existingMatchOptional.isPresent()) {
            Match existingMatch = existingMatchOptional.get();
            existingMatch.setAdversary(matchDTO.getAdversary());
            existingMatch.setStadium(matchDTO.getStadium());
            existingMatch.setDate(matchDTO.getDate());
            return toDTO(matchRepository.save(existingMatch));
        } else return null;

    }
}
