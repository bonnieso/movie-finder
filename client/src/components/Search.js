import React, { useRef } from 'react';

function Search(props) {
  const searchRef = useRef();

  const searchMovies = (e) => {
    if (e.key === 'Enter') {
      let searchTerm = searchRef.current.value;
      let queryURL = searchTerm ? 'http://localhost:8000/search/' + searchTerm : 'http://localhost:8000/';

      fetch(queryURL)
      .then(res => res.json())
      .then(res => {
        props.setSearchTerm(searchTerm);
        props.setMovieList(res.results);
      });
    }
  };

  return (
      <input ref={searchRef} onKeyDown={searchMovies} type="text" placeholder="Search Movies..." />
  );

}

export default Search;
