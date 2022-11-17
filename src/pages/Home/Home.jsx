import { useState, useEffect } from 'react';
import { getTrendingFilms } from '../../components/Services/GetFilms';
import { NavLink } from 'react-router-dom';

const axios = require('axios').default;

const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        getFilms();

        async function getFilms() {
            try {
                const url = getTrendingFilms();
                const response = await axios.get(url);

        const {
          data: { results },
        } = response;
                setFilms(results);
            } catch (error) {
                console.log(error);
            }
        }
    }, []);


    return (
        <main>
            <h2>
                Trending today
            </h2>
            <ul>
                {films.map(({ id, title }) => (
                    <li key={id}>
                        <NavLink to={`/movies/${id}`}>{ title}</NavLink>
                        
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Home;