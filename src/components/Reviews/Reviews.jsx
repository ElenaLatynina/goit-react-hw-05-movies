import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Author, Content, ReviewItem, List } from './Reviews.styled';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '07365d3730901c9189566ffe38d9d5bb';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const urlReviews = `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;

    function getReviews()  {
    fetch(urlReviews)
      .then(response => response.json())
      .then(data => {
        setReviews(
          data.results.map(({ author_details, content }) => ({
            author: author_details.username,
            content: content,
          }))
        );
        })
        .catch(error => console.log(error));
    }
      getReviews();
      
    }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(({ author, content }, index) => {
            return (
              <ReviewItem key={index}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </ReviewItem>
            );
          })};

        </List>
      ) : (<p>We don't have reviews for this movie</p>) }
    </>
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