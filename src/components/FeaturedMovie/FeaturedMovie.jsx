import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

const FeaturedMovie = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
      );
      setMovie(result.data.results[0]);
    };
    fetchData();
  }, []);

  return (
    <div>
      {movie ? (
        <MovieCard movie={movie} />
      ) : (
        <p>Loading featured movie...</p>
      )}
    </div>
  );
};

export default FeaturedMovie;
