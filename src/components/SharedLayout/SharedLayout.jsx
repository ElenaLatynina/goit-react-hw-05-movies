import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header,Container, StyledNavLink } from './SharedLayout.styled';
 

const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <StyledNavLink to="/" end>
                        Home
                    </StyledNavLink>
                    <StyledNavLink to="movies">
                        Movies
                    </StyledNavLink>
                    <Suspense fallback={<div>We are loading</div>}>
                        <Outlet />
                    </Suspense>
                </nav>
            </Header>

        </Container>
    );
};

export default SharedLayout;