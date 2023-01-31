import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMovie from './components/AddMovie/AddMovie';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import MyMovies from './components/MyMovies/MyMovies';
import Navbar from './components/NavBar/NavBar';
import PopularMovies from './components/PopularMovie/PopularMovies';

function App() {
  const [isMyMovies, setIsMyMovies] = useState(false);

  const handleToggleMovies = () => {
    setIsMyMovies(!isMyMovies);
  };

  return (
    <BrowserRouter>
      <Navbar handleToggleMovies={handleToggleMovies} />
      {isMyMovies ? <MyMovies /> : <PopularMovies />}
      <Routes>
        <Route exact path="/" element={ <FeaturedMovie />} />
        <Route path="/popular" element={ <PopularMovies isMyMovies={isMyMovies} />} />
        <Route path="/my-movies" element={ <MyMovies isMyMovies={isMyMovies} />} />
        <Route path="/add-movie" element={ <AddMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
