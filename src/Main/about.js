import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
	padding-top: 140px;
	padding-bottom: 100px;
	padding-left: 170px;
	padding-right: 170px;
	margin: 0px auto;
	max-width: 1600px;
	min-height: 100vh;
	color: white;
	overflow: hidden;
	font-family: 'Asap', sans-serif;
	@media only screen and (max-width: 450px) {
		padding-left: 23px;
		padding-right: 23px;
		min-height: auto;
		max-width: auto;
		padding-top: 50px;
		padding-bottom: 100px;
	}
`;

const Title = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	padding-bottom: 0.5em;
	@media only screen and (max-width: 450px) {
		height: 35px;
	}
`;

const TitleText = styled.h1`
	font-size: 32px;
	padding-right: 0.7em;
	padding-left: 1em;
	color: white;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 22px;
	}
`;

const Line = styled.div`
	content: '';
	display: block;
	width: 70%;
	height: 0px;
	border-bottom: 0.5px solid #ffffff5e;
	@media only screen and (max-width: 450px) {
		width: 45%;
	}
`;

const Body = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 4em;
	@media only screen and (max-width: 450px) {
		padding-top: 1em;
	}
`;

const TextContainer = styled.div`
	width: 90%;
	text-align: center;
	line-height: 30px;
	svg {
		color: none;
	}
	@media only screen and (max-width: 450px) {
		width: 100%;
		padding: 0 1em;
	}
`;

const Text = styled.p`
	font-family: ui-monospace;
	margin: 0;
	padding-bottom: ${(props) => (props.space ? '1em' : '0')};
	font-size: 20px;
	text-align: justify;
	padding-left: 1em;
	@media only screen and (max-width: 450px) {
		padding: 0em;
		margin: 0em;
		font-size: 15px;
		text-align: center;
		line-height: 25px;
		letter-spacing: 1px;
		word-spacing: 4px;
	}
`;

const TextDecoration = styled.p`
	font-family: fantasy;
	font-family: Noteworthy;
	margin: 0;
	font-size: 20px;
	text-align: center;
	color: #ffffff9e;
	font-style: italic;
	@media only screen and (max-width: 450px) {
		padding: 0em;
		margin: 0em;
		font-size: 15px;
		text-align: center;
		line-height: 25px;
		letter-spacing: 1px;
		word-spacing: 4px;
	}
`;

const ParragraphDecoration = styled(TextDecoration)`
	padding: 0;
	padding-top: 5px;
	text-align: justify;
	@media only screen and (max-width: 450px) {
	}
`;

const About = ({ aboutRef }) => {
	return (
		<Container ref={aboutRef}>
			<Title>
				<TitleText>About Me</TitleText>
				<Line />
			</Title>
			<Body>
				<TextContainer>
					<ParragraphDecoration>{'<p>'} </ParragraphDecoration>
					<Text>
						I'm currently looking for new opportunities. I'm always open to new projects, ideas, job
						opportunities and new connections. I love building new stuff so just send me a message and I will
						answer you 100%.
					</Text>
					<ParragraphDecoration>{'</p>'} </ParragraphDecoration>
					<br />
					<TextDecoration>{'<br/>'}</TextDecoration>
					<br />
					<ParragraphDecoration>{'<p>'} </ParragraphDecoration>
					<Text>
						I have a profound passion for programming and new technology. I love to learn new things and build
						stuff. I studied mechanical engineer although I always like computers, learning programming
						started as a hobby, until I decided to make the big step and change my whole career into
						programming.
					</Text>
					<ParragraphDecoration>{'</p>'} </ParragraphDecoration>
					<br />
					<ParragraphDecoration>{'<p>'} </ParragraphDecoration>
					<Text>
						I don't like to quit. Once I start something I finish it, so instead of dropping out of college to
						pursue my dream of being a programmer, I decided to finish my mechanical engineer degree while
						learning and working as a programmer.
					</Text>
					<ParragraphDecoration>{'</p>'} </ParragraphDecoration>
					<br />
					<TextDecoration>{'<br/>'}</TextDecoration>
					<br />
					<ParragraphDecoration>{'<p>'} </ParragraphDecoration>
					<Text>
						My preferable area is frontend using Reactjs, I love how React makes it so easy to improve the
						user's experience. As an engineer, I like UX and the balance between UI and UX. I love to build
						nice looking easy to use responsive web sites. I don't mind getting my hands on other areas if
						needed like backend but my area of expertise is frontend.
					</Text>
					<ParragraphDecoration>{'</p>'} </ParragraphDecoration>
					<br />
					<TextDecoration>{'<br/>'}</TextDecoration>
					<br />
					<ParragraphDecoration>{'<p>'} </ParragraphDecoration>
					<Text>
						Switching carrers is the best decission I have ever made and I am so happy with it. I am a happy
						person who enjoys work. So my dream company would be one with a really good enviroment with my
						coworkers.
					</Text>
					<ParragraphDecoration>{'</p>'} </ParragraphDecoration>
				</TextContainer>
			</Body>
		</Container>
	);
};

export default About;
