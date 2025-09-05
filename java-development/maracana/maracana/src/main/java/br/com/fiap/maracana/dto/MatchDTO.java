package br.com.fiap.maracana.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
public class MatchDTO {

    private UUID uuid;
    private String adversary;
    private String stadium;
    private LocalDateTime date;

}
