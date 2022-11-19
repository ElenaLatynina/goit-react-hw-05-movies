import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Author, Content,ReviewItem, List  } from './Reviews.styled';
// import { getReviews } from 'components/Services/GetFilms';
// const axios = require('axios').default;


const API_KEY = '07365d3730901c9189566ffe38d9d5bb';
const BASE_URL = 'https://api.themoviedb.org/3/';


export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { Id } = useParams();

    useEffect(() => {
        const url = `${BASE_URL}movie/${Id}/reviews?api_key=${API_KEY}&language=en-US`;


        getFilms();

       function getFilms() {
           fetch(url).then(response => response.json())
               .then(data => {
                   setReviews(data.results.map(({ author_detailes, content }) => ({
                       author: author_detailes.username,
                       content: content,
                   })));
               }).catch(error => console.log(error));
        }
        getFilms();
    }, [Id]);

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
        :(<p>We haven't reviews for this movie</p>)
        
    );
};

export default Reviews;