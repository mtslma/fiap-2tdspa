package br.com.pacaembu.proximojogo;

import jakarta.persistence.*;

@Entity
@Table(name = "jogos")
public class Jogo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String mataMata;

    // Getters e setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMataMata() {
        return mataMata;
    }

    public void setMataMata(String mataMata) {
        this.mataMata = mataMata;
    }
}
