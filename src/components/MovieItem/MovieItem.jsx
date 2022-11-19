import { MovieContainer, Poster, Title, Score, Overview , MovieInfo} from "./MovieItem.styled"


export const MovieItem = ({ poster, title, score, overview, genres }) => {
    return (
        <MovieContainer>
            <div>
                <Poster src={poster} alt={title} width="240" height="320" />
            </div>
            <MovieInfo>
                <Title>{title}</Title>
                <Score>User Score: {score}%</Score>
                <Title>Overview</Title>
                <Overview>{overview}</Overview>
                <Title>Genres</Title>
                <p>{genres}</p>
            </MovieInfo>
        </MovieContainer>
    );
};