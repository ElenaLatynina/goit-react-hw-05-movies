import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { findFilm } from 'services/GetFilms';
import { MoviePage, Button, Form, Input } from './Movies.styled';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const queryParam = searchParams.get('query');
    const [query, setQuery] = useState(queryParam ? queryParam : '');
    const location = useLocation();

    useEffect(() => {
        if (!query) {
            return;
        }

        function fetchMovie() {
               findFilm(query).then(data => {
                    setMovies(data.results.map(({ title, id }) => ({ id: id, title: title })));
                }).catch(error => console.log(error));
        }
        fetchMovie();

    }, [query]);
    const handleSubmit = event => {
        event.preventDefault();
        const value = event.target.query.value;
        setQuery(value);
        setSearchParams({ query: value });
    }
       
    return (
        <MoviePage>
            <Form onSubmit={handleSubmit}>
                <Input
                    type=" text"
                    name="query"
                    defaultValue={query}
                    autoComplete="off"
                    autoFocus
                    placeholder="Find film"
                />
                <Button type="submit">
                    <span>Search</span>
                </Button>
            </Form>
            <ul>
                {movies.map(({ id, title }) => (
                    <li key={id}>
                        <Link to={`${id}`}
                            search={{ querySerch: `query=${query}` }}
                            state={{ from: location }}>{title}</Link>
                    </li>
                )
                    
                )}
            </ul>
        </MoviePage>
    );

};
 
Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;