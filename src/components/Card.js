import React from "react";

import Rate from "./Rate";

import "./Card.css";
// import Description from "./Description";

//  import { Link, Route } from "react-router-dom";





const Card = ({ movie }) => {

  return (
   
    <section className="Frame">

      <div className="movie">

       
        <h2 className="film_rating">

         rate: 
         
         <Rate rating={movie.rating} />
          </h2>
          <br></br> 
          

        <div className="pic">

          <img src={movie.posterUrl} alt="poster of the film" />

        </div>

        <div className="text_movie_cont">

<div className="mr_grid">

  <div className="col1">

    <h2>{movie.name}</h2>
    <br></br>

    <p className="movie_gen">{movie.date}</p>

  </div>

</div>

<div className="mr_grid info_row">

  <h5>details</h5>

  <a href={movie.description}>{movie.description}</a>

</div>

<div className="mr_grid action_row">

  <div className="col2">
  
    <button className="watch_btn" onClick={(e) => {
      e.preventDefault();
      window.location.href=`${movie.trailer}`;
      }}>

      <h3>Watch <br></br> trailer</h3>

    </button>
  

  </div>

</div>
 </div>

           

          

        </div>

      

    </section>
    
  );

};



export default Card;