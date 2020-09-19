import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';
import BeginnerProjects from './beginner-projects';
import AdvancedProjects from './advanced-projects';

const Container = styled(motion.section)`
	padding-top: 150px;
	padding-bottom: 100px;
	padding-left: 170px;
	padding-right: 170px;
	margin: 0px auto;
	max-width: 1600px;
	min-height: 90vh;
	color: white;
	overflow: hidden;
	font-family: 'Asap', sans-serif;
	@media only screen and (max-width: 450px) {
		padding-left: 23px;
		padding-right: 23px;
		min-height: auto;
		max-width: auto;
		padding-top: 100px;
		padding-bottom: 80px;
	}
`;

const Title = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	justify-content: flex-start;
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
	color: palevioletred;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 22px;
	}
`;

const Line = styled.div`
	content: '';
	display: block;
	width: 75%;
	height: 0px;
	border-bottom: 0.5px solid #ffffff5e;
	@media only screen and (max-width: 450px) {
		width: 45%;
	}
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 2em;
	@media only screen and (max-width: 450px) {
		padding-top: 1em;
	}
`;

const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 22%;
	padding: 0em 1.5em;
	border-radius: 5px;
	background: #ffffff14;
	box-shadow: rgb(0 0 0 / 14%) 0px 2px 3px 0px, rgb(0 0 0 / 15%) 0px 10px 15px 0px;
	@media only screen and (max-width: 450px) {
		width: 55%;
	}
`;

const Button = styled(motion.h3)`
	cursor: pointer;
	text-transform: uppercase;
	position: relative;
	z-index: 2;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;

const Body = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BackgroundButton = styled(motion.div)`
	width: 120%;
	height: 170%;
	border-radius: 5px;
	background: #db7192bf;
	position: absolute;
	z-index: -1;
	left: -11px;
	top: -7px;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
	@media only screen and (max-width: 450px) {
		left: -8px;
		top: -6px;
	}
`;

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(null);
	useEffect(() => {
		const width = window.innerWidth;
		setIsMobile(false);
		if (width < 450) setIsMobile(true);
	}, []);
	return isMobile;
};

const Projects = ({ projectRef }) => {
	const [showAdvanced, setShowAdvanced] = useState(true);
	const isMobile = useIsMobile();

	const handleProjects = (e) => {
		const { id } = e.target;
		if (id === 'advanced') return setShowAdvanced(true);
		if (id === 'beginner') return setShowAdvanced(false);
		return;
	};

	return (
		<Container ref={projectRef}>
			<Title>
				<TitleText>My Projects</TitleText>
				<Line />
			</Title>
			<ButtonBox>
				<AnimateSharedLayout>
					<ButtonContainer>
						<Button
							whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}
							transition={{}}
							onClick={handleProjects}
							id='advanced'>
							{showAdvanced && <BackgroundButton layoutId='underline' />}
							Advanced
						</Button>
						<Button
							whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}
							transition={{}}
							onClick={handleProjects}
							id='beginner'>
							{!showAdvanced && <BackgroundButton layoutId='underline' />}
							Beginner
						</Button>
					</ButtonContainer>
				</AnimateSharedLayout>
			</ButtonBox>
			<Body>{showAdvanced ? <AdvancedProjects isMobile={isMobile} /> : <BeginnerProjects />}</Body>
		</Container>
	);
};

export default Projects;
