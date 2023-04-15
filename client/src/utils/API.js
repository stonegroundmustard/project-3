const apiKey = process.env.REACT_APP_API_KEY;
// search for movies by genre
export const searchMoviesGenre = (genres = []) => {
    console.log(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genres.join(
            "%2C"
        )}`
    );
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genres.join(
            "%2C"
        )}`
    );
};

// search for all movies with what gets enter in the search bar
export const searchMovies = (movieName, apiKey) => {
    return fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieName}&page=1&include_adult=false`
    );
};
export const searchPopMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
};

export const getMovieImage = (backdrop) => {
    return fetch(`https://image.tmdb.org/t/p/w500${backdrop}`);
};
// get the details of a specific movie using the movie id
export const getMovie = (movieID) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`
    );
};
export const getRecommendation = () => {
    return fetch();
};
