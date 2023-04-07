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
      body: JSON.stringify(MovieData),
    });
  };
  
  // remove saved moive data for a logged in user
  export const removeMovie = (movieId, token) => {
    return fetch(`/api/users/books/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  
  export const searchMovies = (movie, search_field, API_KEY) => {
    // check for spaces in movie name 
    const name_array = movie.split(" "); 
    var search = name_array[0]; 
    for (let i = 1; i < name_array.length; i ++){
        search += '%20'; 
        search += name_array[i]; 
    }
    return fetch(`https://api.watchmode.com/v1/search/?apiKey=${API_KEY}&search_field=${search_field}&search_value=${search}'}`);
  };

  export const getRecommendation = () => {
    return fetch(); 
  }; 