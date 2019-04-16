import React from 'react';
import { Link, Redirect } from "react-router-dom";
import '../styles/Description.css';

function Description(props) {
  if(props.movieData){
    let data = props.movieData;
    let title = data.title;
    let backdrop = data.backdrop_path ? "https://image.tmdb.org/t/p/original/" + data.backdrop_path : '';
    let overview = data.overview;
    let release = data.release_date;
    let rating = data.vote_average;
    let backgroundImage = {backgroundImage: 'url('+ backdrop +')'}

    return (
      <section className="description" style={backgroundImage}>
        <aside className="back"><Link to="/">&larr; Back</Link></aside>
        <article className="description-text">
          <h1>{title}</h1>
          <p>Released {release}</p>
          <p>{rating} out of 10 </p>
          <p>{overview}</p>
        </article>
      </section>
    );
  } else {
    return (
      <Redirect to='/' />
    );
  }

}

export default Description;
