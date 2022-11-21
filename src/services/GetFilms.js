const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '07365d3730901c9189566ffe38d9d5bb';


export const getTrendingFilms = () => {
    const urlHome = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
    return fetch(urlHome).then(response => response.json());
        
};

export const getDescription = movieId => {
    const urlMovie = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

    return fetch(urlMovie)
        .then(response => response.json());
};

export const fetchActors = movieId => {
    const urlCast = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    return  fetch(urlCast).then(response => response.json());
};

export const fetchReviews = movieId => {
    const urlReviews = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    return fetch(urlReviews)
      .then(response => response.json());
};

export const findFilm = query => {
    const urlFilm = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    return  fetch(urlFilm).then(response => response.json());
};