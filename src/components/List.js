import React from "react";

import Card from "./Card";



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

        <Card movie={movie} key={i}/>

      ))}

    </section>

  );

};



export default List;