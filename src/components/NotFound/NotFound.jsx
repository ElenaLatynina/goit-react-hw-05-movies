import { NavLink } from 'react-router-dom';
import { Message } from './NotFound.styled';


const NotFound = () => {
    return (
        <Message>
            <p>Sorry, there is no page</p>
            <NavLink to="/">Go to the main page</NavLink>
        </Message>
    );
};

export default NotFound;