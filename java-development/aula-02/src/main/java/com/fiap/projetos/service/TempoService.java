package com.fiap.projetos.service;

import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class TempoService {

    public Instant agora() {
        return Instant.now();
    }

}
