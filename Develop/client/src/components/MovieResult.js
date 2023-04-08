import React from "react";

import "../styles/MovieResult.css";

const MovieResult = ({id, title, image, genres, link, onSaveMovie }) => {

    // Uses the 'onSaveMove' prop to pass up the Id of the movie to be saved
    function handleSaveMovie() {
        onSaveMovie(id)
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
            <button className="save-button" onClick={handleSaveMovie}>Save +</button>
        </div>
    );
};
export default MovieResult;
