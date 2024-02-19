import { useEffect } from "react";

//a3efb870
const API_URL = 'http://www.omdbapi.com?apikey=a3efb870';

const App = () => {
  // 2. function fetch movies
  //async() function is asynchronously function, use title as parameter
  //The await keyword is used to wait for the response of the HTTP request to return,
  //and then stores the response object in the response variable.
  const searchMovies = async (title) => {
    // await
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };
  //1.fetch the API as soon as the component loads
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (<h1>App</h1>);
};

//export so that it can be called anywhere else
export default App;
