import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import {Route, Switch} from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Switch>
        {/*Route that will take an id parameter after/movies/ and load the Movie component.*/}
        <Route exact path="/movies/:movieID">
          <Movie/>
        </Route>
        
        {/*Route for / that loads the MovieList component.*/}
        <Route exact path="/">
          <MovieList/>
        </Route>  
      </Switch>
    </div>
  );
};

export default App;
