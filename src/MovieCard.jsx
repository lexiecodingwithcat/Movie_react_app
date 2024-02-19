import React from "react";

const MovieCard = ({movie}) => {
   
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        {/* if there is no image, it will render a placeholder 400*400 image */}
        <img
          src={
            movie.Poster !== "N / A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
