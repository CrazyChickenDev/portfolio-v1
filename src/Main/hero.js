import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowheadDown } from '@styled-icons/evaicons-solid';

const Container = styled(motion.section)
`
	padding-top: 200px;
	padding-bottom: 50px;
	padding-left: 170px;
	margin: 0px auto;
	/* max-width: 1600px; */
	min-height: 75vh;
	@media only screen and (max-height: 650px) {
		padding-top: 100px;
	}
	@media only screen and (max-width: 800px) {
		padding-left: 50px;
		padding-right: 50px;
		min-height: 40vh;
	}
	@media only screen and (max-width: 450px) {
		padding-left: 10px;
		padding-right: 10px;
		min-height: 40vh;
		max-width: 100vw;
		padding-top: 155px;
		padding-bottom: 100px;
	}
	@media only screen and (max-width: 350px) {
		padding-left: 10px;
		padding-right: 10px;
		min-height: 40vh;
		max-width: 100vw;
		padding-top: 100px;
		padding-bottom: 100px;
	}
	@media only screen and (max-height: 900px) and (min-height: 800px) {
		padding-top: 180px;
		padding-bottom: 150px;
	}
`;

const Content = styled.div `
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	@media only screen and (max-width: 450px) {
		padding-left: 20px;
		padding-right: 15px;
		min-height: 40vh;
		max-width: 100%;
	}
`;

const Intro = styled.div `
	@media only screen and (max-width: 450px) {
		width: 100%;
	}
`;

const Title = styled(motion.h1)
`
	margin: 0;
	margin: 1rem 0;
	margin-top: 0em;
	font-size: 75px;
	text-align: start;
	color: palevioletred;
	font-family: 'Titillium Web';
	cursor: grab;
	span {
		color: palevioletred;
	}
	@media only screen and (max-width: 800px) {
		font-size: 60px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 40px;
		width: 100%;
	}
	@media only screen and (max-width: 350px) {
		font-size: 36px;
		width: 100%;
	}
`;

const FirstTitle = styled(Title)
`
	font-size: 20px;
	margin: 0.4em 0;
	color: white;
	cursor: default;
	font-family: 'Asap', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 18px;
		width: 100%;
	}
	@media only screen and (max-width: 350px) {
		font-size: 15px;
		width: 100%;
	}
`;

const SubTitle = styled(Title)
`
	font-size: 38px;
	margin: 0;
	color: white;
	cursor: default;
	font-family: 'Asap', sans-serif;
	@media only screen and (max-width: 800px) {
		font-size: 30px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 23px;
		width: 100%;
	}
	@media only screen and (max-width: 350px) {
		font-size: 20px;
		width: 100%;
	}
`;

const Description = styled(Title)
`
	padding-top: 2em;
	width: 690px;
	font-size: 25px;
	margin: 0;
	color: white;
	cursor: default;
	word-spacing: 2px;
	line-height: 45px;
	@media only screen and (max-width: 800px) {
		font-size: 20px;
	}
	@media only screen and (max-width: 450px) {
		width: 100%;
		line-height: 32px;
		font-size: 16px;
	}
	@media only screen and (max-width: 430px) {
		width: 100%;
		line-height: 32px;
		font-size: 13px;
	}
`;

const ScrollDown = styled.div `
	position: absolute;
	bottom: 8px;
	left: 47%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100px;
	color: white;
	color: palevioletred;
	font-size: 16px;
	font-family: 'Asap', sans-serif;
	svg {
		width: 30px;
	}
	@media only screen and (max-width: 450px) {
		bottom: 12px;
		left: 37%;
	}
`;

const ScrollDownContainer = styled(motion.div)
`
	display: ${(props) => (props.didScroll ? 'flex' : 'flex')};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	@media only screen and (max-width: 800px) {
	}
`;

const bounceTransition = {
    y: {
        duration: 0.5,
        yoyo: Infinity,
        ease: 'easeOut',
        delay: 3.5,
    },
};

const Hero = ({ didScroll, handleToast, heroRef }) => {
    const [count, setCount] = useState(0);

    const variants = {
        scroll: { opacity: 0 },
        noScroll: { y: ['0%', '-50%'] },
    };

    const handleDrag = () => {
        let newCount = count + 1;
        setCount(newCount);
        if (count > 2) handleToast('Stop breaking my website! ⛔️ 😉');
        return;
    };

    return ( <
        Container ref = { heroRef } >
        <
        Content >
        <
        Intro >
        <
        FirstTitle > Hi!My name is, < /FirstTitle> <
        Title drag dragConstraints = {
            { left: 0, right: 0, top: 0, bottom: 0 } }
        dragTransition = {
            { bounceStiffness: 500, bounceDamping: 7 } }
        onDragEnd = { handleDrag }
        initial = {
            { y: -300, opacity: 0 } }
        animate = {
            { y: 0, opacity: 1 } }
        transition = {
            { duration: 1 } } >
        Nwaobi < span > Daniel < /span> <
        /Title> <
        SubTitle initial = {
            { x: -300, opacity: 0 } }
        animate = {
            { x: 0, opacity: 1 } }
        transition = {
            { duration: 1 } } >
        I 'm a <span>Cyber-Security Engineer</span> building and researching cool stuff. <
        /SubTitle> <
        Description initial = {
            { opacity: 0 } }
        animate = {
            { opacity: 1 } }
        transition = {
            { duration: 2 } } > {
            "I'm a self-taught cyber-security engineer, a computer engineer by degree and an open-source enthusiast. I'm 22 years old. I live in Benin City, Nigeria. I like building( and designing ) exceptional websites, applications, researching on security, hacking and everything in between.  I speak fluently  🇪🇸  🇺🇸."
        } <
        /Description> <
        Description initial = {
            { opacity: 0 } }
        animate = {
            { opacity: 1 } }
        transition = {
            { duration: 2 } } > {
            "I enjoy creating things that live both on the internet and in reality, whether that be websites, applications, embedded systems or anything in between. I also love working and creating things with microcontrollers and implementing IoT in components, playing video games, designing gadgets and attending social events. My goal is to always build products that provide pixel-perfect, user-friendly, security efficient, performant experiences. Shortly after I graduated Highschool, I had been overly engrossed in the cyber-security space and the vast amount of knowledge it holds."
        } <
        /Description> <
        Description initial = {
            { opacity: 0 } }
        animate = {
            { opacity: 1 } }
        transition = {
            { duration: 2 } } > {
            "I started by learning the basic principles of how computers are made, how they work and followed a lot of DIY's by occasionally visiting websites such as XDA Developers, Wired, The Verge, TechCrunch and Instructables. I loved the open-source community so I got into android development, C programming and embedded systems, a few stacks I also worked with later on when I got into college include Python, JavaScript, HTML & (S)CSS, Node.js, and WordPress. I've also been able to work on a variety of other interesting and meaningful projects daily."
        } <
        /Description> <
        /Intro> <
        /Content> <
        ScrollDown >
        <
        ScrollDownContainer didScroll = { didScroll }
        variants = { variants }
        transition = { bounceTransition }
        animate = { didScroll ? 'scroll' : 'noScroll' } >
        Scroll Down <
        ArrowheadDown / >
        <
        /ScrollDownContainer> <
        /ScrollDown> <
        /Container>
    );
};

export default Hero;