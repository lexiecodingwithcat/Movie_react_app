import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

//a3efb870
const API_URL = "http://www.omdbapi.com?apikey=a3efb870";
const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

const App = () => {
  //use state to pass data from console to the movie card
  //set "movies" as a a default empty array
  const [movies, setMovies] = useState([]);
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
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search for movies" onClick={() => {}} />
      </div>
      {/* Check the movies array is empty or not */}
      {
        movies?.length >0 
        ? (<div className="container">
        {/* <MovieCard movie1={movie1} /> */}
        {movies.map((movie) => (
           <MovieCard movie={movie} />
        )
        )}

      </div>) :
      (
        <div className="empty">
            <h2>No movies found</h2>
        </div>
      )
      }

      
    </div>
  );
};

//export so that it can be called anywhere else
export default App;
