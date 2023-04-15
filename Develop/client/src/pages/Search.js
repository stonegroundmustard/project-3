import React, { useEffect, useState } from "react";
import MovieResult from "../components/MovieResult";
import FilterItem from "../components/FilterItem";
import { searchMovies, searchMoviesGenre, searchPopMovies } from "../utils/API";

import "../styles/Search.css";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { ADD_MOVIE, DELETE_MOVIE } from "../utils/mutations";
import auth from "../utils/auth";

const API_KEY = "6507f12c70c05d087443f11fa6d712a7";

// Constant array of all different genres and their IDs
const GENRE_FILTERS = [
    {
        id: 28,
        name: "Action",
    },
    {
        id: 12,
        name: "Adventure",
    },
    {
        id: 16,
        name: "Animation",
    },
    {
        id: 35,
        name: "Comedy",
    },
    {
        id: 80,
        name: "Crime",
    },
    {
        id: 99,
        name: "Documentary",
    },
    {
        id: 18,
        name: "Drama",
    },
    {
        id: 10751,
        name: "Family",
    },
    {
        id: 14,
        name: "Fantasy",
    },
    {
        id: 36,
        name: "History",
    },
    {
        id: 27,
        name: "Horror",
    },
    {
        id: 10402,
        name: "Music",
    },
    {
        id: 9648,
        name: "Mystery",
    },
    {
        id: 10749,
        name: "Romance",
    },
    {
        id: 878,
        name: "Science Fiction",
    },
    {
        id: 10770,
        name: "TV Movie",
    },
    {
        id: 53,
        name: "Thriller",
    },
    {
        id: 10752,
        name: "War",
    },
    {
        id: 37,
        name: "Western",
    },
];

const Search = () => {
    // Query for user data
    const { loading, data: userData } = useQuery(GET_ME);
    const user = userData?.me || undefined;
    let savedMovies = [];
    if (user) savedMovies = user.savedMovies.map((movie) => movie.movieId);

    // Import mutations for adding and deleting movies
    const [addMovie, { addError, addData }] = useMutation(ADD_MOVIE);
    const [deleteMovie, { deleteError, deleteData }] =
        useMutation(DELETE_MOVIE);

    // Keeps track of which filters are active. This can be used to modify search query
    const [activeGenres, setActiveGenres] = useState([]);

    const [searchInput, setSearchInput] = useState("");
    // State holding the movies from the search (currently has dummy movies as default)
    const [searchedMovies, setSearchedMovies] = useState([]);

    useEffect(() => {
        async function setDefault() {
            const response = await searchPopMovies(API_KEY);

            if (!response.ok) {
                throw new Error("something went wrong!");
            }
            const { results } = await response.json();
            const moviesData = results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                genres: movie.genre_ids
                    .map((id) => {
                        const genre = GENRE_FILTERS.find((g) => g.id === id);
                        return genre ? genre.name : null;
                    })
                    .filter((name) => name !== null),
                image: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                link: `https://www.themoviedb.org/movie/${movie.id}`,
            }));
            setSearchedMovies(moviesData);
        }
        setDefault();
    }, []);

    // Toggles a specific filter based on its previous state
    function handleToggleActive(filterId) {
        const query = filterId + "," + activeGenres;
        setActiveGenres((prevState) => {
            if (prevState.includes(filterId))
                return prevState.filter((id) => id !== filterId);
            return [...prevState, filterId];
        });

        handleGenreSearch(query);
    }

    async function handleGenreSearch(query) {
        const response = await searchMoviesGenre(query, API_KEY);
        if (!response.ok) {
            throw new Error("something went wrong!");
        }
        const { results } = await response.json();
        const movieData = results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            genres: movie.genre_ids
                .map((id) => {
                    const genre = GENRE_FILTERS.find((g) => g.id === id);
                    return genre ? genre.name : null;
                })
                .filter((name) => name !== null),
            image: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            link: `https://www.themoviedb.org/movie/${movie.id}`,
        }));
        setSearchedMovies(movieData);
    }

    // Function to handle the submission of the search form
    async function handleSearchSubmit(event) {
        event.preventDefault();
        console.log("searching for");
        const response = await searchMovies(searchInput, API_KEY);

        if (!response.ok) {
            throw new Error("something went wrong!");
        }
        const { results } = await response.json();
        const movieData = results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            genres: movie.genre_ids
                .map((id) => {
                    const genre = GENRE_FILTERS.find((g) => g.id === id);
                    return genre ? genre.name : null;
                })
                .filter((name) => name !== null),
            image: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            link: `https://www.themoviedb.org/movie/${movie.id}`,
        }));
        setSearchedMovies(movieData);
    }

    // Function to handle the saving of a movie
    async function handleSaveMovie(movie) {
        const token = auth.loggedIn() ? auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await addMovie({ variables: { movie } });

            if (!data) {
                console.log(addError);
                throw new Error("something went wrong!");
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function handleDeleteMovie(movieId) {
        const token = auth.loggedIn() ? auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await deleteMovie({ variables: { movieId } });

            if (!data) {
                console.log(deleteError);
                throw new Error("something went wrong!");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="search-body">
            <aside className="filters-aside">
                <div className="genre-filters">
                    <h1>Genres</h1>
                    <div className="filter-list">
                        {GENRE_FILTERS.map((genre) => (
                            <FilterItem
                                {...genre}
                                onToggleActive={handleToggleActive}
                                isActive={activeGenres.includes(genre.id)}
                                key={genre.id}
                            />
                        ))}
                    </div>
                </div>
            </aside>
            <section className="search-container">
                <div htmlFor="search">Search movies</div>
                <form
                    action="submit"
                    className="search-form"
                    onSubmit={handleSearchSubmit}
                >
                    <input
                        type="text"
                        name="search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button>Search</button>
                </form>
            </section>
            <section className="search-results-container">
                {searchedMovies.map((movie, ind) => (
                    <MovieResult
                        key={ind}
                        {...movie}
                        saved={savedMovies.includes(movie.id)}
                        loggedIn={!!user}
                        onSaveMovie={handleSaveMovie}
                        onDeleteMovie={handleDeleteMovie}
                    />
                ))}
            </section>
        </div>
    );
};

export default Search;
