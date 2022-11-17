import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'components/Services/GetFilms';
const axios = require('axios').default;


const Cast = () => {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        serchFilms();

        async function serchFilms() {
            try {
            const url = getActors(movieId);
            const response = await axios.get(url);

            const {
                data: { cast },
            } = response;

            setActors(cast);
        } catch (error) {
            console.log(error);
        }
        }
    }, [movieId]);


    return (
        actors.map(({ name, character, profile_path }) => (
            <ul key={name}>
                <Image src={profile_path ?
                    `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://ods-metering-systems.com/wp-content/uploads/2017/02/NoImageAvailable-1.gif'}
                    alt="actors_photo" />
                <li>
                    <p>{name}</p>
                    <p>Character:{character}</p>
                </li>
            </ul>
        ));
        
    );
};

export default Cast;