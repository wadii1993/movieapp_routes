import React from "react";
import AddMovie from "../addmovie/AddMovie";
import MovieCard from "../moviecard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movie, del, search, hundleAdd }) => {
  return (
    <>
      <div className="movieliste">
        {movie.map((el) => (
          <MovieCard key={el.id} el={el} del={del} />
        ))}
      </div>
      <div>
        <AddMovie hundleAdd={hundleAdd} />
      </div>
    </>
  );
};

export default MovieList;
