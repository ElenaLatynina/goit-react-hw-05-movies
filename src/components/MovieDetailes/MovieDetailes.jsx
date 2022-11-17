import { useState, useEffect, Suspense } from 'react';
import { useParams , useLocation, NavLink,Outlet} from 'react-router-dom';
import { ReturnButton,MovieContainer, GenresList, GenresItem, Poster, MovieInfo } from './MovieDetailes.styled';
import { getDescription } from 'components/Services/GetFilms';
const axios = require('axios').default;

const MovieDetailes = () => {
    const { filmInfo, setFilmInfo } = useState([]);
    const location = useLocation();
    const { movieId } = useParams();

    useEffect(() => {
        searchFilms();

        async function searchFilms() {
            try {
                const url = getDescription(movieId);
                const response = await axios.get(url);
                const { data } = response;
                
                setFilmInfo(data);
            } catch (error) {
                console.log(error);
            }
        }

    }, [movieId, setFilmInfo]);

    const { title, overview, vote_average, genres, release_date, poster_path } = filmInfo;
    const year = new Date(release_date).getFullYear();
    const backLinkHref = location?.state?.from ?? '/';


    return (
        <>
            <ReturnButton to={backLinkHref}>
                Back
            </ReturnButton>
            <MovieContainer>
                <Poster src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}` } alt={ title}></Poster>
                <MovieInfo>
                    <h2>{ title} ({year})</h2>
                    <p> User score: {vote_average && vote_average.toFixed() * 10}%</p>
                    <h3>Overview</h3>
                    <p>{ overview}</p>
                    <h4>Genres  </h4>
                    {genres && (<GenresList>
                         {genres.map(({ name }) => (<GenresItem key={name}>{ name}</GenresItem>))}
                    </GenresList>)}
                </MovieInfo>
            </MovieContainer>
            <div>
                <h3>Additional Information</h3>
                <ul>
                    <li>
                        <NavLink to="cast" state={{from:backLinkHref}}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews" state={{ from: backLinkHref }}>Reviews</NavLink>
                    </li>
                </ul>
                <Suspense fallback={<div>Is loading</div>}>
                    <Outlet/>
                </Suspense>
            </div>
        </>
    );
};

export default MovieDetailes;