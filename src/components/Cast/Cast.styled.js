import styled from 'styled-components';

export const Image = styled.img`
width:100%;
margin-bottom: 14px;
border: 2px solid #fff;
`;
export const ActorsList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 30px;
align-items: center;
justify-content: center;
list-style: none;

`;

export const ActorCard = styled.li`
flex-basis: calc(12% - 30px);
  :not(:last-child) {
    margin-bottom: 30px;
  }
  
  p {
    margin: 0;
  }

`;

export const Info = styled.div`
  flex-grow: 1;

`;

export const Name = styled.h2`
font-size: 16px;
margin-bottom: 8px;
`

export const Character = styled.span`
  font-weight: bold;
`;