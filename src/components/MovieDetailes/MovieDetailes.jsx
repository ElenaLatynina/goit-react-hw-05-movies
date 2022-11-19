import { useState, useEffect, Suspense } from 'react';
import { useParams , useLocation, Link, Outlet} from 'react-router-dom';
import { ReturnButton, MovieContainer } from './MovieDetailes.styled';
import { MovieItem } from 'components/MovieItem/MovieItem';
// import { getDescription } from '../Services/GetFilms';
// const axios = require('axios').default;

const API_KEY = '07365d3730901c9189566ffe38d9d5bb';
const BASE_URL = 'https://api.themoviedb.org/3/';

const MovieDetailes = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/movies';

    useEffect(() => {
        const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
        
        function fetchMovie() {
            fetch(url).then(response => response.json())
                .then(data => {
                    setMovie({
                        poster: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
                        title: data.title,
                        score: Number.parseInt(data.vote_average * 10),
                        overview: data.overview,
                        genres: data.genres
                            .reduce((acc, genre) => (acc += genre.name + ' '), '')
                            .trim(),
                    });
                })
                .catch(error => console.log(error));
        }
        fetchMovie();
    }, [id]);

    return (
        <MovieContainer>
            <ReturnButton to={backLink}>
                Back
            </ReturnButton>
                
            <MovieItem
                poster={movie.poster}
                title={movie.title}
                score={movie.score}
                overview={movie.overview}
                genres={movie.genres}
            />
           
            <div>
                <h3>Additional Information</h3>
                <ul>
                    <li>
                        <Link to="cast" state={{ from: backLink }}>Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews" state={{ from: backLink }}>Reviews</Link>
                    </li>
                </ul>
                <Suspense fallback={<div>Is loading</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </MovieContainer>

    );
    

};


export default MovieDetailes;