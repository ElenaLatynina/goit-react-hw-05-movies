import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from 'services/GetFilms';
import { ActorsList, Image, ActorCard, Info, Name, Character } from './Cast.styled';
import PropTypes from 'prop-types';
;
const placeHolder =
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';


const Cast = () => {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        function getActors() {
                fetchActors(movieId).then(data => {
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
    getActors();},[movieId]);

    return (
        <ActorsList>
            {actors.map(({ name, character, poster }) => {
                return (
                    <ActorCard key={name}>
                        <Image src={poster} alt={name} widtn="150" height="200" />
                        <Info>
                            <Name>{name}</Name>
                            <Character>Character:{character}</Character>
                        </Info>
                    </ActorCard>
                );
            }
           
            )}
        </ActorsList>);
    
};

Cast.propTypes = {
    actors: PropTypes.string,
};

export default Cast;