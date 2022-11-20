import { useState, useEffect, Suspense } from 'react';
import { useParams , useLocation, Link, Outlet} from 'react-router-dom';
import { ReturnLink, MovieDetailesContainer, Additional, Title, Arrow } from './MovieDetailes.styled';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { HiArrowUturnLeft } from 'react-icons/hi2';

const API_KEY = '07365d3730901c9189566ffe38d9d5bb';
const BASE_URL = 'https://api.themoviedb.org/3/';


const MovieDetailes = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/movies';

    useEffect(() => {
        const urlMovie = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
        
        function fetchMovie() {
            fetch(urlMovie).then(response => response.json())
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
        <main>
            <MovieDetailesContainer>
                <ReturnLink to={backLink}>
                    <Arrow>
                        <HiArrowUturnLeft size={12} />
                    </Arrow>
                Back
            </ReturnLink>
                
            <MovieItem
                poster={movie.poster}
                title={movie.title}
                score={movie.score}
                overview={movie.overview}
                genres={movie.genres}
            />
                <Title>Additional Information</Title>
                <Additional>
                    <li>
                        <Link to="cast" state={{ from: backLink }}>Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews" state={{ from: backLink }}>Reviews</Link>
                    </li>
                </Additional>
                <Suspense fallback={<div>Is loading</div>}>
                    <Outlet />
                </Suspense>
           
        </MovieDetailesContainer>
        </main>

    );

};


export default MovieDetailes;