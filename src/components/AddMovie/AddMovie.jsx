import React, { useState } from 'react';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: '',
    year: '',
    genre: '',
    poster: ''
  });

  const handleChange = (event) => {
    setMovie({
      ...movie,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const movieList = JSON.parse(localStorage.getItem('movies')) || [];
    movieList.push(movie);
    localStorage.setItem('movies', JSON.stringify(movieList));

    setMovie({
      title: '',
      year: '',
      genre: '',
      poster: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={movie.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Year"
        name="year"
        value={movie.year}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Genre"
        name="genre"
        value={movie.genre}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        name="poster"
        value={movie.poster}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
