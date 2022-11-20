import styled from 'styled-components';
import { Link } from 'react-router-dom';;


export const MovieDetailesContainer = styled.div`
padding: 32px;
`;

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

export const Arrow = styled.span`
  margin-right: 16px;
`;

export const Title = styled.h2`
margin: 12px;
`;

export const MovieInfo = styled.div`
margin-left: 12px;

`;

export const Additional = styled.ul`
margin-bottom: 12px;
padding-bottom:8px;
border-bottom:1px solid grey;
 a {
    display: block;
    margin-bottom: 10px;
  }
`;