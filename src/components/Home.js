import React, { useState } from "react";

import "./Home.css";

import Add from "./Add";

import List from "./List";

import Search from "./Search";

// import { Filmotheque } from "./Filmotheque";



function Home({movies, add}) {

  

  const [searchInput, setSearchInput] = useState("");

  const [searchRate, setSearchRate] = useState(0);



  



  return (
    
    <div className="Home">
       
      <Search

        setSearchInput={setSearchInput}

        searchRate={searchRate}

        setSearchRate={setSearchRate}

      />
      
      <List

        movies={movies.filter(

          (el) =>

            el.rating >= searchRate &&

            el.name.toUpperCase().includes(searchInput.toUpperCase().trim())

        )}
      
      />
      <Add add={add} />
     

    </div>

  );

}



export default Home;