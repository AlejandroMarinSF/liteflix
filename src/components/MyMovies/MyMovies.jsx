import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MyMovies = ({ movies }) => {
  if (!movies) return null;

  return (
    <div className="my-movies-container">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MyMovies;
