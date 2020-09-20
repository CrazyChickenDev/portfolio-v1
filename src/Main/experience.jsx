import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';
import ItemExperienceList from './item-experience-list';
import ItemExperienceInfo from './item-experience-info';
import { dataExperience } from './data';

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
		padding-left: 30px;
		padding-right: 30px;
		min-height: 40vh;
		max-width: 100vw;
		padding-top: 130px;
	}
`;

const Title = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 48px;
	padding-bottom: 0em;
	@media only screen and (max-width: 450px) {
		height: 35px;
	}
`;

const TitleText = styled.h1`
	font-size: 28px;
	padding-right: 0.7em;
	color: #ffc200;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 22px;
	}
`;

const Line = styled.div`
	content: '';
	display: block;
	width: 80%;
	height: 0px;
	border-bottom: 0.5px solid #ffffff5e;
	/* margin: 0px auto; */
	@media only screen and (max-width: 450px) {
		width: 70%;
	}
`;

const ListContainer = styled(motion.div)`
	width: 100%;
	color: white;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	@media only screen and (max-width: 450px) {
		display: block;
	}
`;

const List = styled(motion.div)`
	width: 40%;
	@media only screen and (max-width: 450px) {
		width: 90%;
	}
`;

const BodyList = styled(motion.ul)`
	font-size: 16px;
	letter-spacing: 2px;
	list-style-type: none;
	font-family: 'Titillium Web';
	@media only screen and (max-width: 450px) {
		font-size: 16px;
	}
	@media only screen and (max-width: 400px) {
		font-size: 14px;
	}
	@media only screen and (max-width: 350px) {
		font-size: 13px;
	}
`;

const Experience = ({ expRef }) => {
	const [selected, setSelected] = useState(0);

	const handleClick = (index) => setSelected(index);

	return (
		<Container ref={expRef}>
			<Title>
				<TitleText>Experience</TitleText>
				<Line />
			</Title>
			<ListContainer>
				<List>
					<AnimateSharedLayout>
						<BodyList>
							{Object.keys(dataExperience.list).map((item, index) => {
								return (
									<ItemExperienceList
										key={index}
										item={item}
										index={index}
										handleClick={handleClick}
										selected={selected}
									/>
								);
							})}
						</BodyList>
					</AnimateSharedLayout>
				</List>
				<ItemExperienceInfo selected={selected} />
			</ListContainer>
		</Container>
	);
};

export default Experience;
