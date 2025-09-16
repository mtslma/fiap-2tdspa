package br.com.fiap.maracana.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@Table(name="tb_matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid;

    @Column(nullable = false, length = 50)
    private String adversary;

    @Column(nullable = false, length = 50)
    private String stadium;

    // Por enquanto vou deixar o match como true só para não quebrar o fluxo que eu já tenho
    @Column(nullable = true)
    private Integer maxCapacity;

    private LocalDateTime date;

}
