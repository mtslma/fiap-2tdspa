package br.com.fiap.api_netflix.service;

import br.com.fiap.api_netflix.model.Movie;
import br.com.fiap.api_netflix.model.MovieCategory;

import java.util.List;

public interface MovieCatalogInterface {

    void addMovie(Movie movie);

    List<Movie> filtrarFilmePorIdade(int idadeEspectador);

    List<Movie> filtrarPorCategoria(MovieCategory category);

}