import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Author, Content, ReviewItem, List } from './Reviews.styled';
import { fetchReviews } from 'services/GetFilms';
import PropTypes from 'prop-types';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {

    function getReviews()  {
   
      fetchReviews(movieId).then(data => {
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