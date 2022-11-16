import styled from 'styled-components';
import {  NavLink} from 'react';

export const ReturnButton = styled(NavLink)`
display: inline-block;
margin-bottom: 8px;
padding:4px 12px;
text-decoration: none;
background-color:blue;
color: white;
border-radius:5px;

`;


export const Poster = styled.img`
width:400px`;

export const MovieContainer = styled.div`
display:flex;
`;

export const GenresList = styled.ul`
display:flex;
list-style: none;
padding:4px;
`;

export const GenresItem = styled.li`
gap:4px;
`;

export const MovieInfo = styled.div`
margin-left: 12px;

`;