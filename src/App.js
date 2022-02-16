import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MovieList from "./Components/MovieList";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";

function App({ moviesList }) {
  const [movies, setMovies] = useState(moviesList);

  const addItem = (movie) => {
    setMovies([...movies, movie]);
  };

  const updateItem = (updates, id) => {
    setMovies(
      movies.map((movie) => {
        if (movie.id === id) {
          movie = { ...updates };
        }
        return movie;
      })
    );
  };

  const deleteItem = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filterContent = (criteria) => {
    switch (criteria) {
      case "title":
        setMovies(movies.sort((movie) => movie.title));
        break;

      case "rate":
        setMovies(
          movies.sort((a, b) => {
            return a.rate - b.rate;
          })
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="row App">
        <div className="p-4 col-4 fixed-top side-panel">
          <AddMovie addItem={addItem} />
          <Filter filterContent={filterContent} />
        </div>
        <MovieList
          updateItem={updateItem}
          deleteItem={deleteItem}
          movies={movies}
        />
      </div>
    </>
  );
}

export default App;
