import React, { useState } from "react";

import "./App.css";

import Add from "./components/Add";

import List from "./components/List";

import Search from "./components/Search";

import { Filmotheque } from "./components/Filmotheque";



function App() {

  const [movies, setMovies] = useState(Filmotheque);

  const [searchInput, setSearchInput] = useState("");

  const [searchRate, setSearchRate] = useState(0);



  const add = (x) => setMovies([...movies, x]);



  return (

    <div className="App">

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



export default App;