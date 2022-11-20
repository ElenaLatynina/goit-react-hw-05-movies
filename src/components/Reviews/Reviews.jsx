import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Author, Content, ReviewItem, List } from './Reviews.styled';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '07365d3730901c9189566ffe38d9d5bb';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const urlReview = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;


        getFilms();

       function getFilms() {
           fetch(urlReview).then(response => response.json())
               .then(data => {
                   setReviews(data.results.map(({ author_detailes, content }) => ({
                       author: author_detailes.username,
                       content: content,
                   })));
               }).catch(error => console.log(error));
        }
        getFilms();
    }, [id]);

    return (
        reviews.length !== 0 ? (
            <List>
      {reviews.map(({ author, content },index) => (
        <ReviewItem key={index}>
          <Author>Author: {author}</Author>
          <Content>{content}</Content>
        </ReviewItem>
      ))}
    </List>)
        :(<p>We don't have reviews for this movie</p>)
        
    );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};


export default Reviews;