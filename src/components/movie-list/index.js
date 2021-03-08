import React, {useState}  from "react";
import "./index.css";

function MovieList() {
  const [movieSearch, setMovieSearch] = useState({
    movies: null,
    year: null
  });
  const handleYear = (e) => {
    setMovieSearch({
      ...movieSearch,
      year: Number(e.target.value)
    });
  };
  const handleFetch = () => {
    fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${movieSearch.year}`)
    .then((response) => response.json())
    .then((movies) => setMovieSearch({
      ...movieSearch,
      movies: movies.data
    })).catch((error) => console.log(error));
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" value={movieSearch.year} onChange={handleYear} />
        <button className="" data-testid="submit-button" onClick={handleFetch}>Search</button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        {movieSearch.movies !== null && movieSearch.movies.map((movie) => (
          <li className="slide-up-fade-in py-10" key={movie.imdbID}>
            {movie.Title}
          </li>
        ))}
      </ul>

      {movieSearch.movies === null || movieSearch.movies.length === 0 &&
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Results Found</div>
      }
    </div>
  );
}

export default MovieList
