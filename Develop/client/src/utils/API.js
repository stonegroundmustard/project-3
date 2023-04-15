
  // search for movies by genre
  export const searchMoviesGenre = (genre, API_KEY) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genre}`);
  };

  // search for all movies with what gets enter in the search bar
  export const searchMovies =(movieName, API_KEY) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`); 
  }
  export const searchPopMovies = (API_KEY) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`); 
  }

  export const getMovieImage = (backdrop) => {
    return fetch(`https://image.tmdb.org/t/p/w500${backdrop}`); 
  }
  // get the details of a specific movie using the movie id  
  export const getMovie = (movieID, API_KEY) =>{
    return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`); 
  }
  export const getRecommendation = () => {
    return fetch(); 
  }; 