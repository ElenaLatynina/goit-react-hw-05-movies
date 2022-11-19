import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getActors } from '../Services/GetFilms';
import { Image } from './Cast.styled';
// const axios = require('axios').default;


const API_KEY = '07365d3730901c9189566ffe38d9d5bb';
const BASE_URL = 'https://api.themoviedb.org/3/';


const Cast = () => {
    const [actors, setActors] = useState([]);
    const { Id } = useParams();

    useEffect(() => {
        const url = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

        function getActors() {
            fetch(url).then(response => response.json())
                .then(data => {
                    setActors(data.cast.map(({ profile_path, name, character }) => {
                        return {
                            poster: profile_path
                                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                : placeHolder,
                            name: name,
                            character: character,
                        };
                    }));
                })
            .catch(error => console.log(error));
        }
    getActors();},[Id]);

    return (
        actors.map(({ name, character, poster }) => { 
            return (
                <li key={name}>
                    <Image src={poster} alt={name} widtn="150px" height="200px" />
                    <div>
                    <p>{name}</p>
                    <p>Character:{character}</p>
                    </div>
                </li>
            )
        }
           
        ))
};

export default Cast;