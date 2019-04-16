import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';
import '../styles/Home.css';

function Home(props) {

  let listHeader = props.searchTerm ? 'Showing Results for "' + props.searchTerm + '"' : 'Popular Movies';

  return (
    <section className="home">
      <header className="header">
        <h1>Movie Finder</h1>
        <Search setSearchTerm={props.setSearchTerm} setMovieList={props.setMovieList} />
      </header>
      <h2>{listHeader}</h2>
      <MovieList movieList={props.movieList} selectMovie={props.selectMovie}/>
    </section>
  );

}

export default Home;
