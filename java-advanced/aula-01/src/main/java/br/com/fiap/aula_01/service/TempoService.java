package br.com.fiap.aula_01.service;

import org.springframework.stereotype.Service;

import java.time.Instant;

// Serviço dedicado a manipular operações de tempo
@Service
public class TempoService {

    public Instant agora(){
        return Instant.now();
    }
}
