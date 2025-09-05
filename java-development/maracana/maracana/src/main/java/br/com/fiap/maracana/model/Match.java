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

    @Column(nullable = false)
    private String stadium;

    private LocalDateTime date;

}
