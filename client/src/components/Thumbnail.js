import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Thumbnail.css';

function Thumbnail(props) {
  let poster = props.data.poster_path ? "https://image.tmdb.org/t/p/w200/" + props.data.poster_path : './placeholder.png';
  let title = props.data.title;

  return (
    <li className="thumbnail"  onClick={()=>props.selectMovie(props.data)}>
      <Link to="/description/">
        <img src={poster} alt={title} />
        <p className="title">{title}</p>
      </Link>
    </li>
  );

}

export default Thumbnail;
