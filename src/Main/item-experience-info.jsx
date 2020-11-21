import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { dataExperience } from './data';

const ExperienceInfo = styled(motion.div)`
	width: 50%;
	border: 2px solid #ffc200;
	background: #191919;
	border-radius: 8px;
	padding: 1em;
	height: 292px;
	@media only screen and (max-width: 450px) {
		width: 90%;
		height: auto;
		padding-bottom: 0;
	}
`;

const Title = styled(motion.div)`
	padding: 0 0.2em;
	padding-bottom: 20px;
	a {
		color: white;
		text-decoration: none;
		cursor: pointer;
		&:hover {
			color: #ffc200;
		}
	}
	@media only screen and (max-width: 450px) {
		padding-bottom: 7px;
	}
`;

const TitleText = styled.h4`
	font-family: 'Calibre', sans-serif;
	font-size: 20px;
	margin: 0;
	padding: 0.2em 0;
	@media only screen and (max-width: 450px) {
		font-size: 16px;
	}
`;

const DateText = styled.span`
	font-family: 'Roboto', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;

const Body = styled.div``;

const ListInfo = styled.ul`
	@media only screen and (max-width: 450px) {
		padding-left: 18px;
	}
`;

const Info = styled.li`
	padding-bottom: 30px;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
		font-family: 'Roboto';
	}
`;

const ItemExperienceInfo = ({ selected }) => {
	return (
		<ExperienceInfo>
			<Title>
				<a href={dataExperience.info[selected].link} target='_blank' rel='noopener noreferrer'>
					<TitleText>{dataExperience.info[selected].title}</TitleText>
				</a>
				<DateText>{dataExperience.info[selected].date}</DateText>
			</Title>
			<Body>
				<ListInfo>
					{dataExperience.info[selected].first && <Info>{dataExperience.info[selected].first}</Info>}
					{dataExperience.info[selected].second && <Info>{dataExperience.info[selected].second}</Info>}
					{dataExperience.info[selected].third && <Info>{dataExperience.info[selected].third}</Info>}
				</ListInfo>
			</Body>
		</ExperienceInfo>
	);
};

export default ItemExperienceInfo;
