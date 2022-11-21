const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '07365d3730901c9189566ffe38d9d5bb';


export const getTrendingFilms = () => {
    const urlHome = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
    return fetch(urlHome).then(response => response.json());
        
};

export const getDescription = movieId => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

    return url;
};

export const getActors = movieId => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    return url;
};

export const getReviews = movieId => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    return url;
};

export const findFilm = query => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    return url;
};