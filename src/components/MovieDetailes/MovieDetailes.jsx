import { useState, useEffect, Suspense } from 'react';
import { useParams , useLocation, NavLink, Outlet} from 'react-router-dom';
import { ReturnButton,MovieContainer, MovieInfo, Poster, Score, Title, Overview, Genres } from './MovieDetailes.styled';
// import { getDescription } from '../Services/GetFilms';
// const axios = require('axios').default;

const API_KEY = '07365d3730901c9189566ffe38d9d5bb';
const BASE_URL = 'https://api.themoviedb.org/3/';

const MovieDetailes = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/movies';

    useEffect = (() => {
        const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
        
        function fetchMovie() {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setMovie({
                        poster: `https://image.tmdb.org/t/p/w500/${data.poster}`,
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
                <Poster src={movie.poster } alt={movie.title} width="240"  height="320"/>
                <MovieInfo>
                    <Title>{movie.title}</Title>
                    <Score>User Score: {movie.score}%</Score>
                    <h3>Overview</h3>
                    <Overview>{movie.overview}</Overview>
                    <Genres>Genres</Genres>
                    <p>{ movie.genres}</p>
                    
                </MovieInfo>
           
                <div>
                    <h3>Additional Information</h3>
                    <ul>
                        <li>
                            <NavLink to="cast" state={{ from: backLink }}>Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to="reviews" state={{ from: backLink }}>Reviews</NavLink>
                        </li>
                    </ul>
                    <Suspense fallback={<div>Is loading</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </MovieContainer>

        );

}
export default MovieDetailes;