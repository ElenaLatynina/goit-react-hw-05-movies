import styled from 'styled-components';
import { Link } from 'react-router-dom';;

export const ReturnLink = styled(Link)`
display: inline-block;
padding: 3px 10px;
margin-bottom: 10px;
border: 1px solid #a8a8ee;
border-radius: 10px;
color: #000000;
text-decoration: none;
:hover,
:focus {
color: #ffffff;
background-color: navy;
}
`;

export const Poster = styled.img`
width:400px;
`;

export const MovieContainer = styled.div`
display: flex;
padding: 32px;
`;

export const Title = styled.h2`
font-size:16px;
margin: 16px;
`;

export const Score = styled.p`
  margin-bottom: 15px;
`;

export const Overview = styled.p`
  margin-bottom: 15px;
`;

export const Genres = styled.h3`
  margin-bottom: 15px;
`;

export const GenresItem = styled.li`
gap:4px;
`;

export const MovieInfo = styled.div`
margin-left: 12px;

`;

export const Additional = styled.ul`
margin-bottom: 12px;
padding-bottom:8px;

border-bottom:1px solid grey;

`;