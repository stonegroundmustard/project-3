export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  // save movie data for a logged in user
  export const saveMovie = (movieData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movieData),
    });
  };
  
  // remove saved moive data for a logged in user
  export const removeMovie = (movieId, token) => {
    return fetch(`/api/users/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  // search for movies by genre
  export const searchMoviesGenre = (genre, API_KEY) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genre}`);
  };

  // search for all movies with what gets enter in the search bar
  export const searchMovies =(movieName, API_KEY) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`); 
  }

  // get the details of a specific movie using the movie id 
  export const getMovie = (movieID, API_KEY) =>{
    return fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`); 
  }
  export const getRecommendation = () => {
    return fetch(); 
  }; 