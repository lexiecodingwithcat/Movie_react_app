import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

//a3efb870
const API_URL = "http://www.omdbapi.com?apikey=a3efb870";


const App = () => {
  //use state to pass data from console to the movie card
  //set "movies" as a a default empty array
  const [movies, setMovies] = useState([]);
  //another state to make the search bar work4
  const [searchTerm, setSearchTerm] = useState("");
  // 2. function fetch movies
  //async() function is asynchronously function, use title as parameter
  //The await keyword is used to wait for the response of the HTTP request to return,
  //and then stores the response object in the response variable.
  const searchMovies = async (title) => {
    // await
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    //pass data to state setter;
    setMovies(data.Search);
  };
  //1.fetch the API as soon as the component loads
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          //e is a event object when input is changed
          onChange={(e) => 
            setSearchTerm(e.target.value)
          }/>
        <img src={SearchIcon} alt="search for movies" onClick={() => searchMovies(searchTerm)} />
      </div>
      {/* Check the movies array is empty or not */}
      {movies?.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movie1} /> */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

//export so that it can be called anywhere else
export default App;
