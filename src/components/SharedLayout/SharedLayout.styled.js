import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Container = styled.div`
margin: 0 auto;
padding: 8px ;
`;

export const Header = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
gap:16px;
padding: 8px;
border-bottom: 1px solid black;

> nav{
display: flex;
}

`;

export const StyledNavLink = styled(NavLink)`
padding: 16px;
border-radius:5px;
text-decoration:none;
color: grey;
font-weight: 600;

&.active{
    color: white;
    background-color: blue;
}
`;