import PropTypes from 'prop-types';import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomePage } from './Home.styled';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '07365d3730901c9189566ffe38d9d5bb';


const Home = () => {
    const [films, setFilms] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const urlHome = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;

        function getFilms() {
            fetch(urlHome).then(response => response.json())
                .then(data => {
                    setFilms(data.results.map(result => ({
                        id: result.id, title: result.title
                    })));
                }).catch(error => console.log(error));
        }
    getFilms();

    }, []);

    return (
        <HomePage>
            <h2>
                Trending today
            </h2>
        <ul>
            {films.map(({ id, title }) => (
            <li key={id}>
                    <Link to={`/movies/${id}`}
                    state={{ from: location }}>{title}</Link>
            </li>
            ))}
        </ul>
        </HomePage>
    );

};

Home.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};



export default Home;