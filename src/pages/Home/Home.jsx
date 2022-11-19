import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { getTrendingFilms } from '../../components/Services/GetFilms.js';
import { NavLink } from 'react-router-dom';

// const axios = require('axios').default;

const API_KEY = '07365d3730901c9189566ffe38d9d5bb';
const BASE_URL = 'https://api.themoviedb.org/3/';

const Home = () => {
    const [films, setFilms] = useState([]);
    // const location = useLocation();

    useEffect(() => {
        const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;

        function getFilms() {
            fetch(url).then(response => response.json())
                .then(data => {
                    setFilms(data.results.map(result => ({
                        id: result.id, title: result.title
                    })));
                }).catch(error => console.log(error));
        }
    getFilms();

    }, []);

    return (
        <main>
            <h2>
                Trending today
            </h2>
        <ul>
            {films.map(({ id, title }) => (
            <li key={id}>
                <NavLink to={`/movies/${id}`}>{title}</NavLink>
            </li>
            ))}
        </ul>
        </main>
    );

};



// const Home = () => {
//     const [films, setFilms] = useState([]);

//     useEffect(() => {
//         getFilms();

//         async function getFilms() {
//         try {
//             const url = getTrendingFilms();
//             const response = await axios.get(url);

//         const {
//           data: { results },
//         } = response;
//                 setFilms(results);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     }, []);

//     return (
//         <main>
//             <h2>
//                 Trending today
//             </h2>
//         <ul>
//             {films.map(({ id, title }) => (
//             <li key={id}>
//                 <NavLink to={`/movies/${id}`}>{title}</NavLink>
//             </li>
//             ))}
//         </ul>
//         </main>
//     );
// };

export default Home;