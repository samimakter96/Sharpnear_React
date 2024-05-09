import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = ({ movies, onDeleteMovie }) => {
  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;
