import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	padding: 1em 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Asap', sans-serif;
	background: #1e1e1e;
	z-index: 9999;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	background: #1f1f1f;
	background: linear-gradient(to right, palevioletred ${(props) => props.scroll}, white 0);
	color: ${(props) => (props.isSafari ? 'white' : 'transparent')};
	-webkit-background-clip: text;
	@media only screen and (max-width: 800px) {
		width: 90%;
	}
	@media only screen and (max-width: 350px) {
		width: 95%;
	}
`;

const HeaderTextContainer = styled.div`
	padding: 0 10px;
	height: 45px;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	cursor: pointer;
	@media only screen and (max-width: 350px) {
		padding: 0 5px;
	}
`;

const HeaderText = styled.h4`
	font-size: 18px;
	margin: 0;
	padding: 0;

	background: transparent;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
	@media only screen and (max-width: 350px) {
		font-size: 14px;
	}
`;
const HeaderLine = styled.div`
	content: '';
	display: block;
	height: 2px;
	min-width: 6%;
	margin: 0px auto;

	background-color: white;
	@media only screen and (max-width: 450px) {
		min-width: 4%;
	}
	@media only screen and (max-width: 400px) {
		min-width: 2%;
	}
	@media only screen and (max-width: 350px) {
		min-width: 1%;
		margin: 0;
	}
`;

const NavbarHeader = ({ isSafari, handleScroll, scrollProgress }) => {
	return (
		<HeaderContainer>
			<Header isSafari={isSafari} scroll={scrollProgress}>
				<HeaderTextContainer id='intro' onClick={handleScroll}>
					<HeaderText>Intro</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer id='exp' onClick={handleScroll}>
					<HeaderText>Experience</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer id='skills' onClick={handleScroll}>
					<HeaderText>Skills</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer id='project' onClick={handleScroll}>
					<HeaderText>Projects</HeaderText>
				</HeaderTextContainer>
				<HeaderLine />
				<HeaderTextContainer id='about' onClick={handleScroll}>
					<HeaderText>About</HeaderText>
				</HeaderTextContainer>
			</Header>
		</HeaderContainer>
	);
};

export default NavbarHeader;
