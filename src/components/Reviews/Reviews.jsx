import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from '../Services/GetFilms';
const axios = require('axios').default;

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getFilms();

        async function getFilms() {
            try {
                const url = getReviews(movieId);
                const response = await axios.get(url);
                const { data: { results }, } = response;
                
                setReviews(results);
            } catch (error) {
                console.log(error);
            }
        }

    }, [movieId]);

    return (
        reviews.length !== 0 ? (
            <ul>
      {reviews.map(({ author, content }) => (
        <li key={author}>
          <h5>Author: {author}</h5>
          <p>{content}</p>
        </li>
      ))}
    </ul>)
        :(<p>We haven't reviews for this movie</p>)
        
    );
};

export default Reviews;