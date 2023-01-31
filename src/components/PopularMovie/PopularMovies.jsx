import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PopularMovies.css';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [mode, setMode] = useState('popular');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20'
      );
      setMovies(result.data.results);
    };
    fetchData();
  }, []);

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className='popular-movies'>
      <header className='header'>
        <h1 className='title'>Popular Movies</h1>
        <div className='mode-toggle'>
          <button
            className={`mode-toggle__button ${mode === 'popular' ? 'active' : ''}`}
            onClick={() => handleModeChange('popular')}
          >
            Popular
          </button>
          <button
            className={`mode-toggle__button ${mode === 'my-movies' ? 'active' : ''}`}
            onClick={() => handleModeChange('my-movies')}
          >
            My Movies
          </button>
        </div>
      </header>
      <main className='movies-list'>
        {movies.map((movie) => (
          <div key={movie.id} className='movie-item'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2 className='movie-item__title'>{movie.title}</h2>
            <p className='movie-item__release-date'>
              {movie.release_date}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default PopularMovies;
