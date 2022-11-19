import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getActors } from '../Services/GetFilms';
import { ActorsList, Image, ActorCard, Info, Name, Character } from './Cast.styled';
// const axios = require('axios').default;


const API_KEY = '07365d3730901c9189566ffe38d9d5bb';
const BASE_URL = 'https://api.themoviedb.org/3/';
const placeHolder =
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';


const Cast = () => {
    const [actors, setActors] = useState([]);
    const { Id } = useParams();

    useEffect(() => {
        const url = `${BASE_URL}movie/${Id}/credits?api_key=${API_KEY}&language=en-US`;

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
        <ActorsList>
            {actors.map(({ name, character, poster }) => {
                return (
                    <ActorCard key={name}>
                        <Image src={poster} alt={name} widtn="150px" height="200px" />
                        <Info>
                            <Name>{name}</Name>
                            <Character>Character:{character}</Character>
                        </Info>
                    </ActorCard>
                );
            }
           
            )}
               </ActorsList>)

     
    
};

export default Cast;