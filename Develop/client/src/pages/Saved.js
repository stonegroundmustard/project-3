import React, { useState } from "react";
import MovieResult from "../components/MovieResult";

import "../styles/Saved.css";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { DELETE_MOVIE } from "../utils/mutations";
import auth from "../utils/auth";

const Saved = () => {
    // const [savedMovies, setSavedMovies] = useState(DUMMY_MOVIES);
    const { loading, data: userData } = useQuery(GET_ME);
    const user = userData?.me || undefined;
    const [deleteMovie, { deleteError, deleteData }] =
        useMutation(DELETE_MOVIE);

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
        <div className="saved-page">
            <h1>My Movies</h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <section className="saved-movies-container">
                    {user.savedMovies.map((movie, ind) => (
                        <MovieResult
                            key={ind}
                            {...movie}
                            id={movie.movieId}
                            saved={true}
                            loggedIn={!!user}
                            onDeleteMovie={handleDeleteMovie}
                        />
                    ))}
                </section>
            )}
        </div>
    );
};
export default Saved;
