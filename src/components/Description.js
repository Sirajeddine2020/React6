import React from 'react';
import {Link} from 'react-router-dom';
import "./Description.css";

const Projection =({ youtubeId }) => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe name="screen" title="new"
        style={{
          position: "absolute",
          justifyContent:"center",
          top: 10,
          left: 10,
          width: "70%",
          height: "70%"
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

function Description ({match,  movies})  {
	// var film = movies.filter(el=>el.name===match.params.name);
  var film = movies.find(el=>el.name===match.params.name);
  var filmId=film.trailer.substring(31);
 
  return (
    <section className="descript_body" >
	
    <h1 className="descript_h1">It's show time!</h1>
    <br/>
    <h2 className="descript_h2"> This is the description Page of <span>{film.name}</span> </h2>
    <br/>
    <a className="descript_a" href={film.description}>More details</a>
    <br/>
    <div> 
      <h4 className="descript_h4">Trailer of </h4> <h5 className="descript_h5">{film.name}</h5>
      <br/>
                 {Projection(filmId)} 
           
    </div> 
    <Link to="/">Previous</Link>
    </section>
  );
};

export default Description;