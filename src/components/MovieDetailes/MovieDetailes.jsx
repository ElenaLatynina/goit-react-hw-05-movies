import PropTypes from 'prop-types';
import { useState, useEffect, Suspense } from 'react';
import { useParams , useLocation, Link, Outlet} from 'react-router-dom';
import { ReturnLink, MovieDetailesContainer, Additional, Title, Arrow } from './MovieDetailes.styled';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { HiArrowUturnLeft } from 'react-icons/hi2';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '07365d3730901c9189566ffe38d9d5bb';

const MovieDetailes = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/movies';

    useEffect(() => {
        const urlMovie = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
        // const urlMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=07365d3730901c9189566ffe38d9d5bb&language=en-US`;

        
        function fetchMovie() {
            fetch(urlMovie).then(response => response.json()).then(data => {
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

MovieDetailes.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.exact({
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.exact({
          name: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  backLinkHref: PropTypes.string,
  additionalInfo: PropTypes.arrayOf(
    PropTypes.exact({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  path: PropTypes.string,
};
export default MovieDetailes;