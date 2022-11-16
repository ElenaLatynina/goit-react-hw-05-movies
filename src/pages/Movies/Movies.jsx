import { useState, useEffect } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { findFilm } from 'components/Services/GetFilms';
import { Button } from './Movies.styled';
const axios = require('axios').default;



const Movies = () => {
    const [selectedFilms, setSelectedFilms] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const queryValue = searchParams.get('query');
    const location = useLocation();

    useEffect(() => {
        if (!queryValue) {
            return;
        }

        fetchFilms();

        async function fetchFilms() {
            try {
                const url = findFilm(queryValue);
                const response = await axios.get(url);

                const { data: { results }, } = response;

                setSelectedFilms(results);
            } catch (error) {
                console.log(error);
            }
        }

    },[queryValue]);

    const handleSubmit = event => {
        event.preventDefault();
        if (inputValue !== '') { setSearchParams({ query: inputValue }); }
        setInputValue('');
}
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type=" text"
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    autoComplete="off"
                    autoFocus
                    placeholder="Find film"
                />
                <Button type="submit">
                    <span>Search</span>
                </Button>
            </form>
            <ul>
                {selectedFilms.map(({ id, title }) => (
                    <li key={id}>
                        <NavLink to={`/movies/${id}`} state={{from:location}}>{title}</NavLink>
                    </li>
                )
                    
                )}
            </ul>
        </>
    );
};

export default Movies;