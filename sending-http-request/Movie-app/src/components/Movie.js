import React from 'react';

import classes from './Movie.module.css';


const Movie = ({ id, title, releaseDate, openingText, onDeleteMovie }) => {
  const deleteHandler = () => {
    onDeleteMovie(id);
  };

  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
      <button onClick={deleteHandler} className='delete-btn'>Delete</button>
    </li>
  );
};

export default Movie;
