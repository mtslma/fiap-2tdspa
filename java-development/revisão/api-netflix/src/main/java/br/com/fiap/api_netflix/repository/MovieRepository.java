package br.com.fiap.api_netflix.repository;

import br.com.fiap.api_netflix.model.Movie;
import br.com.fiap.api_netflix.model.MovieCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface MovieRepository extends JpaRepository<Movie, UUID> {

    List<Movie> findByRateLessThanEqual(Integer minimumRate);
    
    List<Movie> findByCategoriesIn(List<MovieCategory> categories);

}
