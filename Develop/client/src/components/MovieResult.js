import React from "react";

import "../styles/MovieResult.css";

const MovieResult = ({
    id,
    title,
    image,
    genres,
    link,
    onSaveMovie,
    saved,
    onDeleteMovie,
}) => {
    // Uses the 'onSaveMove' prop to pass up the Id of the movie to be saved
    function handleSaveMovie() {
        onSaveMovie(id);
    }

    function handleDeleteMovie() {
        onDeleteMovie(id);
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
            {!saved ? (
                <button className="save-button" onClick={handleSaveMovie}>
                    Save +
                </button>
            ) : (
                <button className="save-button" onClick={handleDeleteMovie}>
                    Delete x
                </button>
            )}
        </div>
    );
};
export default MovieResult;
