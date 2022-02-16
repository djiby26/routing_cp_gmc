import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./Components/MovieDetail";
import ErrorPage from "./Components/ErrorPage";

const moviesList = [
  {
    id: 2,
    title: "Forest Gump",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit accusamus corrupti sapiente ipsa rem incidunt amet aspernatur accusantium dicta",
    rating: 4,
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/Luq2aEeRoKQ",
  },
  {
    id: 1,
    title: "Harry Potter",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit accusamus corrupti sapiente ipsa rem incidunt amet aspernatur accusantium dicta",
    rating: 5,
    posterURL:
      "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg",
    trailer: "https://www.youtube.com/embed/Luq2aEeRoKQ",
  },
  {
    id: 4,
    title: "Titanic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit accusamus corrupti sapiente ipsa rem incidunt amet aspernatur accusantium dicta",
    rating: 3,
    posterURL:
      "https://img8.cdn.cinoche.com/images/7d407b936f65be3f8dca2cf5c4aea8d4.jpg",
    trailer: "https://www.youtube.com/embed/Luq2aEeRoKQ",
  },
  {
    id: 5,
    title: "Best Worst Movie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit accusamus corrupti sapiente ipsa rem incidunt amet aspernatur accusantium dicta",
    rating: 2,
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/9/9d/Best-worst-movie.jpg",
    trailer: "https://www.youtube.com/embed/Luq2aEeRoKQ",
  },
  {
    id: 3,
    title: "Troll 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit accusamus corrupti sapiente ipsa rem incidunt amet aspernatur accusantium dicta",
    rating: 1,
    posterURL:
      "https://fr.web.img5.acsta.net/pictures/20/12/04/11/43/5464495.jpg",
    trailer: "https://www.youtube.com/embed/Luq2aEeRoKQ",
  },
];

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App moviesList={moviesList} />} />
      <Route
        path="detail/:movieId"
        element={<MovieDetail movies={moviesList} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
