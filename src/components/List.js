import React from "react";

import Card from "./Card";
 import { Link } from "react-router-dom";




const List = ({ movies }) => {


  return (

    <section

      style={{

        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-arround",

        

      }}

    >

      {movies.map((movie, i) => (
         <div>
           <button >
            <Card movie={movie} key={i}  />
            <h3><Link to={`/Description/${movie.name}`}>Description of {movie.name} </Link></h3> 
            </button>
      
        </div>
            
      ))}

    </section>

  );

};



export default List;