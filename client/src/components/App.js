import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home.js';
import Description from './Description.js';
import '../styles/App.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState();
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/')
    .then(res => res.json())
    .then(res => {
      setMovieList(res.results);
    });
  }, []);

  return (
    <main className="App">
        <Switch>
          <Route path="/" exact component={() => <Home selectMovie={(data)=>setSelectedMovie(data)} setMovieList={(data)=>setMovieList(data)} movieList={movieList} setSearchTerm={(data)=>setSearchTerm(data)} searchTerm={searchTerm}/>} />
          <Route path="/description" component={() => <Description movieData={selectedMovie} />} />
        </Switch>
    </main>
  );
}

export default App;
