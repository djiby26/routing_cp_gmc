import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { movieId } = useParams();
  return (
    <div>
      {movies
        .filter((movie) => movie.id === parseInt(movieId))
        .map((movie) => {
          return (
            <>
              <div style={{ marginTop: "3rem", textAlign: "center" }}>
                <h1>Title: {movie.title}</h1>
                <h4>Movie description</h4>
                <p>{movie.description}</p>
              </div>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={movie.trailer}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default MovieDetail;
