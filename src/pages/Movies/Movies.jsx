import { useState, useEffect } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
// import { findFilm } from 'components/Services/GetFilms';
import { Button, Form, Input } from './Movies.styled';
// const axios = require('axios').default;

const API_KEY = '07365d3730901c9189566ffe38d9d5bb';
const BASE_URL = 'https://api.themoviedb.org/3/';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const queryParam = searchParams.get('query');
    const [query, setQuery] = useState(queryParam ? queryParam : '');
    
   
    const location = useLocation();

    useEffect(() => {
        const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;


        if (!query) {
            return;
        }

        function fetchMovie() {
            fetch(url).then(response => response.json())
                .then(data => {
                    setMovies(data.results.map(({ title, id }) => ({ id: id, title: title })));
                }).catch(error => console.log(error));
        }
        fetchMovie();

    }, [query]);
    const handleSubmit = event => {
        event.preventDefault();
        const value = event.target.query.value;
        setQuery(value);
        setSearchParams({ query: value }); }
       
     return (
        <>
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
                        <NavLink to={`/movies/${id}`} state={{ from: location }}>{title}</NavLink>
                    </li>
                )
                    
                )}
            </ul>
        </>
    );

    }
   



// const Movies = () => {
//     const [selectedFilms, setSelectedFilms] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//     const [searchParams, setSearchParams] = useSearchParams();
//     const queryValue = searchParams.get('query');
//     const location = useLocation();

//     useEffect(() => {
//         if (!queryValue) {
//             return;
//         }

//         fetchFilms();

//         async function fetchFilms() {
//             try {
//                 const url = findFilm(queryValue);
//                 const response = await axios.get(url);

//                 const { data: { results }, } = response;

//                 setSelectedFilms(results);
//             } catch (error) {
//                 console.log(error);
//             }
//         }

//     },[queryValue]);

//     const handleSubmit = event => {
//         event.preventDefault();
//         if (inputValue !== '') { setSearchParams({ query: inputValue }); }
//         setInputValue('');
//     }
//      return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type=" text"
//                     value={inputValue}
//                     onChange={event => setInputValue(event.target.value)}
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Find film"
//                 />
//                 <Button type="submit">
//                     <span>Search</span>
//                 </Button>
//             </form>
//             <ul>
//                 {selectedFilms.map(({ id, title }) => (
//                     <li key={id}>
//                         <NavLink to={`/movies/${id}`} state={{from:location}}>{title}</NavLink>
//                     </li>
//                 )
                    
//                 )}
//             </ul>
//         </>
//     );
    
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type=" text"
//                     value={inputValue}
//                     onChange={event => setInputValue(event.target.value)}
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Find film"
//                 />
//                 <Button type="submit">
//                     <span>Search</span>
//                 </Button>
//             </form>
//             <ul>
//                 {selectedFilms.map(({ id, title }) => (
//                     <li key={id}>
//                         <NavLink to={`/movies/${id}`} state={{from:location}}>{title}</NavLink>
//                     </li>
//                 )
                    
//                 )}
//             </ul>
//         </>
//     );
// };

export default Movies;