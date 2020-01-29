import React from 'react';
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}

    {/*Add functionality so the Home button on the SavedList component navigates back to home.*/}
    <Link to="/">
    <div className="home-button">Home</div>
    </Link>
    </div>
);

export default SavedList;
