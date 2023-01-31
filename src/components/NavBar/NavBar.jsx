import React, { useState } from 'react';

const NavBar = ({ handleToggleMovies }) => {
  const [isMyMovies, setIsMyMovies] = useState(false);

  return (
    <nav>
      <div>
        <button onClick={() => setIsMyMovies(false)}>Popular Movies</button>
        <button onClick={() => setIsMyMovies(true)}>My Movies</button>
      </div>
      <div>
        <button onClick={handleToggleMovies}>
          {isMyMovies ? 'Show Popular Movies' : 'Show My Movies'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
