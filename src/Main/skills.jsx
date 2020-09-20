import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataEducation } from './data';
import ItemEducationList from './item-education';
import ListSkills from './list-skills';

const Container = styled(motion.section)`
	padding-top: 150px;
	padding-bottom: 100px;
	padding-left: 170px;
	padding-right: 170px;
	margin: 0px auto;
	max-width: 1600px;
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
	@media only screen and (max-width: 450px) {
		height: 35px;
	}
`;

const TitleText = styled.h1`
	font-size: 28px;
	padding-right: 0.7em;
	color: white;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 22px;
	}
`;

const Line = styled.div`
	content: '';
	display: block;
	width: 85%;
	height: 0px;
	border-bottom: 0.5px solid #ffffff5e;
	@media only screen and (max-width: 450px) {
		width: 65%;
	}
`;

const EducationBox = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: baseline;
	height: 355px;
	@media only screen and (max-width: 450px) {
		display: block;
		height: auto;
	}
`;

const ListContainer = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: baseline;
	height: 355px;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
	}
`;

const BodyList = styled(motion.ul)`
	font-size: 16px;
	letter-spacing: 2px;
	list-style-type: none;
	font-family: 'Titillium Web';
	li {
		cursor: pointer;
		line-height: 65px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		@media only screen and (max-width: 450px) {
			line-height: 45px;
		}
	}
	@media only screen and (max-width: 450px) {
		padding: 0;
		margin: 0;
		padding-left: 0.6em;
		padding-top: 0.6em;
	}
`;

const Skills = ({ skillsRef }) => {
	return (
		<Container ref={skillsRef}>
			<Title>
				<TitleText>Skills</TitleText>
				<Line />
			</Title>
			<EducationBox>
				<ListSkills />
				<ListContainer>
					<BodyList>
						{Object.keys(dataEducation).map((item, key) => {
							return <ItemEducationList item={item} index={key} key={key} />;
						})}
					</BodyList>
				</ListContainer>
			</EducationBox>
		</Container>
	);
};

export default Skills;
