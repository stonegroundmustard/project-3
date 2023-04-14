import React, { useState } from "react";
import MovieResult from "../components/MovieResult";

import "../styles/Saved.css";

const DUMMY_MOVIES = [
    {
        id: 0,
        title: "The Matrix",
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        genres: ["Action", "Thriller"],
        link: "https://www.imdb.com/title/tt0133093/",
    },
    {
        id: 1,
        title: "The Matrix",
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        genres: ["Action", "Thriller"],
        link: "https://www.imdb.com/title/tt0133093/",
    },
    {
        id: 2,
        title: "The Matrix",
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        genres: ["Action", "Thriller"],
        link: "https://www.imdb.com/title/tt0133093/",
    },
    {
        id: 3,
        title: "The Matrix",
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        genres: ["Action", "Thriller"],
        link: "https://www.imdb.com/title/tt0133093/",
    },
];

const Saved = () => {
    const [savedMovies, setSavedMovies] = useState(DUMMY_MOVIES);

    function handleDeleteMovie(id) {
      console.log(`delete movie with id ${id}`);
    }

    return (
        <div className="saved-page">
            <h1>My Movies</h1>
            <section className="saved-movies-container">
                {savedMovies.map((movie, ind) => (
                    <MovieResult
                        key={ind}
                        {...movie}
                        saved={true}
                        onDeleteMovie={handleDeleteMovie}
                    />
                ))}
            </section>
        </div>
    );
};
export default Saved;
