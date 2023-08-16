import React from 'react';
import { NavButton } from '../styled-link/styled-link.component';
import { NavContainer, NavContent, NavTitle } from './nav.styles';

const Navigation = () => {
	return (
		<NavContainer>
			<NavContent>
				<NavTitle>
					<h2>Per Scholas Picks</h2>
					<span>Powered by De Sean Ward</span>
				</NavTitle>
				<NavButton to='/'>Home</NavButton>
				<NavButton to='/about'>About</NavButton>
			</NavContent>
		</NavContainer>
	);
};

export default Navigation;
