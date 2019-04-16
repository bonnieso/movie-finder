import React from 'react';
import Thumbnail from './Thumbnail.js';
import '../styles/MovieList.css';

function MovieList(props) {

  const thumbList = props.movieList.map((movie, i) =>
    <Thumbnail key={i} data={movie} selectMovie={props.selectMovie} />
  );

  if(props.movieList.length > 0){
    return (
        <ul className="movieList">{thumbList}</ul>
    );
  } else {
      return (
        <h2>No movies found.</h2>
      );
  }

}

export default MovieList;
