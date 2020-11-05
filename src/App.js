import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import logo from './logo.svg';
import Description from "./components/Description";
import Home from "./components/Home";


import { Filmotheque } from "./components/Filmotheque";
import "./App.css";

  



function App() {

  const [movies, setMovies] = useState(Filmotheque);
  
  const add = (x) => setMovies([...movies, x]);
  return (
    <Router>
    <div className="App">

      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo"  />
        <h1 className="App-title">Welcome to React Router checkpoint by Sirajeddine</h1>
      </header>
      <nav className="navbar navbar-light">

     
        <ul className="nav navbar-nav">
                    
            <li>
        <Link to="/">Home</Link>
        
        
   
          </li>
          
          
        </ul>
        </nav>

      <Switch>
        <Route exact path="/" render={() => <Home movies={movies}  add={add}/>} />
       
        <Route exact path="/Description/:name" render={(props) => <Description movies={movies} {...props}  />} />
       
        </Switch>
      
     

    </div>
    </Router>
  );


        }
        
export default App;