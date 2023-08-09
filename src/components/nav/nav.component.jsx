import React from 'react';
import { NavContainer, NavContent, StyledLink } from './nav.styles';

const Navigation = () => {
	return (
		<NavContainer>
			<NavContent>
                <StyledLink to='/'>
                    Home
                </StyledLink>
				<StyledLink to='/about'>About</StyledLink>
			</NavContent>
			<hr />
		</NavContainer>
	);
};

export default Navigation;
