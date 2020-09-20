import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)
`
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

const Title = styled(motion.div)
`
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

const TitleText = styled.h1 `
	font-size: 32px;
	padding-right: 0.7em;
	padding-left: 1em;
	color: white;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 22px;
	}
`;

const Line = styled.div `
	content: '';
	display: block;
	width: 70%;
	height: 0px;
	border-bottom: 0.5px solid #ffffff5e;
	@media only screen and (max-width: 450px) {
		width: 45%;
	}
`;

const Body = styled.div `
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 4em;
	@media only screen and (max-width: 450px) {
		padding-top: 1em;
	}
`;

const TextContainer = styled.div `
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

const Text = styled.p `
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

const TextDecoration = styled.p `
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

const ParragraphDecoration = styled(TextDecoration)
`
	padding: 0;
	padding-top: 5px;
	text-align: justify;
	@media only screen and (max-width: 450px) {
	}
`;

const About = ({ aboutRef }) => {
    return ( <
        Container ref = { aboutRef } >
        <
        Title >
        <
        TitleText > About Me < /TitleText> <
        Line / >
        <
        /Title> <
        Body >
        <
        TextContainer >
        <
        ParragraphDecoration > { '<p>' } < /ParragraphDecoration> <
        Text >
        I love breaking into stuff!I 'm a Computer Software Engineer, Security Researcher, an aspiring Red-Teamer(love being offensive), 
        Open - source Enthusiast and a Student from Nigeria.I 'm currently learning front-end web development, cyber-security and i have a kin interest for hacking.
        I also go by the alias 'CrazyChickenDev'.I have a profound passion
        for programming, security researching and new technology.I love to learn new things and build stuff.I studied computer engineering being that I 've always loved computers, learning programming
        started as a passion, then I decided to make the big step and move fully into programming. <
        /Text> <
        ParragraphDecoration > { '</p>' } < /ParragraphDecoration> <
        br / >
        <
        ParragraphDecoration > { '<p>' } < /ParragraphDecoration> <
        Text >
        I enjoy creating things that live both on the internet and in reality, whether that be websites, applications, embedded systems or anything in between.I also love working and creating things with microcontrollers and implementing IoT in components,
        playing video games, designing gadgets and attending social events.My goal is to always build products that provide pixel - perfect, user - friendly, security efficient, performant experiences.Shortly after I graduated Highschool,
        I had been overly engrossed in the cyber - security space and the vast amount of knowledge it holds. <
        /Text> <
        ParragraphDecoration > { '</p>' } < /ParragraphDecoration> <
        br / >
        <
        TextDecoration > { '<br/>' } < /TextDecoration> <
        br / >
        <
        ParragraphDecoration > { '<p>' } < /ParragraphDecoration> <
        Text >
        I started by learning the basic principles of how computers are made, how they work and followed a lot of DIYs by occasionally visiting websites such as XDA Developers, Wired, The Verge, TechCrunch and Instructables.I loved the open - source community so I got into android development, C programming and embedded systems, a few stacks I also worked with later on when I got into college include Python, JavaScript, HTML & CSS, Node.js, and WordPress.I 've also been able to work on a variety of other 
        interesting and meaningful projects daily. <
        /Text> <
        ParragraphDecoration > { '</p>' } < /ParragraphDecoration> <
        br / >
        <
        TextDecoration > { '<br/>' } < /TextDecoration> <
        br / >
        <
        ParragraphDecoration > { '<p>' } < /ParragraphDecoration> <
        Text >
        I 'm currently looking for new opportunities and I'
        m always open to new projects, ideas, job opportunities and new connections.I love building new stuff so just send me a message and I will reply 100 % . <
        /Text> <
        ParragraphDecoration > { '</p>' } < /ParragraphDecoration> <
        /TextContainer> <
        /Body> <
        /Container>
    );
};

export default About;