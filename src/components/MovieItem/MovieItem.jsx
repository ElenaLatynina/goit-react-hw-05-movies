import { MovieContainer, Poster, Title, Score, Overview , TitlePart} from "./MovieItem.styled"
import PropTypes from 'prop-types';

export const MovieItem = ({ poster, title, score, overview, genres }) => {
    return (
        <MovieContainer>
            <div>
                <Poster src={poster} alt={title} width="240" height="320" />
            </div>
            <div>
                <Title>{title}</Title>
                <Score>User Score: {score}%</Score>
                <TitlePart>Overview</TitlePart>
                <Overview>{overview}</Overview>
                <TitlePart>Genres</TitlePart>
                <p>{genres}</p>
            </div>
        </MovieContainer>
    );
};

MovieItem.propTypes = {
poster: PropTypes.string,
title: PropTypes.string,
score: PropTypes.number,
overview: PropTypes.string,
genres: PropTypes.string,
}