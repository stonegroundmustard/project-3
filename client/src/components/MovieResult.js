import React from "react";

import "../styles/MovieResult.css";

const MovieResult = ({
    id: movieId,
    title,
    image,
    genres,
    link,
    onSaveMovie,
    saved,
    onDeleteMovie,
    loggedIn,
}) => {
    // Uses the 'onSaveMove' prop to pass up the Id of the movie to be saved
    function handleSaveMovie() {
        onSaveMovie({ movieId, title, image, genres, link });
    }

    function handleDeleteMovie() {
        onDeleteMovie(movieId);
    }

    return (
        <div
            className="movie-result-container"
            style={{ backgroundImage: `url(${image})` }}
        >
            <a href={link} target="blank">
                <div className="movie-text">
                    <h1>{title}</h1>
                    <div>
                        {genres.map((genre, ind) => (
                            <div key={ind}>{genre}</div>
                        ))}
                    </div>
                </div>
            </a>
            {loggedIn &&
                (!saved ? (
                    <button className="save-button" onClick={handleSaveMovie}>
                        Save +
                    </button>
                ) : (
                    <button className="save-button" onClick={handleDeleteMovie}>
                        Delete x
                    </button>
                ))}
        </div>
    );
};
export default MovieResult;
