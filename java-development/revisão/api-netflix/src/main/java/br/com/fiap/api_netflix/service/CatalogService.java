package br.com.fiap.api_netflix.service;

import br.com.fiap.api_netflix.model.Movie;
import br.com.fiap.api_netflix.model.MovieCategory;
import br.com.fiap.api_netflix.repository.MovieRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor // responśavel por criar todos os construtores que vai ser a injeção de dependência
public class CatalogService implements MovieCatalogInterface {

    // Injetando a dependência
    private final MovieRepository repository;

    @Override
    public void addMovie(Movie movie) {
        repository.save(movie);
    }

    @Override
    public List<Movie> filtrarFilmePorIdade(int idadeEspectador) {
        return repository.findByRateLessThanEqual(idadeEspectador);
    }

    @Override
    public List<Movie> filtrarPorCategoria(MovieCategory category) {
        return repository.findByCategoriesIn(List.of(category));
    }


}
