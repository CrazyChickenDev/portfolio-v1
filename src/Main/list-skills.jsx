import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
	width: 65%;
	display: flex;
	justify-content: space-evenly;
	align-items: baseline;
	padding-top: 3em;
	height: 200px;
	@media only screen and (max-width: 450px) {
		padding-top: 0em;
		height: auto;
		width: 100%;
	}
`;

const SkillsColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 28%;
	@media only screen and (max-width: 450px) {
		width: 40%;
	}
`;

const TextContainer = styled(motion.div)`
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	@media only screen and (max-width: 450px) {
		height: 65px;
	}
`;

const ColumnText = styled(motion.span)`
	color: white;
	color: ${(props) => (props.color === '#ffc200' ? '#ffc200' : 'white')};
	text-align: center;
	flex: 0 0 175px;
	font-size: 16px;
	font-weight: 700;
	width: 100%;
	letter-spacing: 2px;
	font-family: 'Calibre', sans-serif;
	cursor: default;
	@media only screen and (max-width: 450px) {
		text-align: center;
		font-size: 14px;
		flex: 0 0 130px;
	}
`;

const Education = () => {
	return (
		<Container>
			<SkillsColumn>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#ffc200'}>
						#JavaScript(ES6)
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						#Python
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#ffc200'}>
						#Pentesting
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						#NodeJs
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
			<SkillsColumn>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						#C++
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#ffc200'}>
						#CSS
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						#HTML5
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#ffc200'}>
						#GatsbyJs
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
			<SkillsColumn>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#ffc200'}>
						#SQL
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						#ReactJs
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }} color={'#ffc200'}>
						#Jekyll
					</ColumnText>
				</TextContainer>
				<TextContainer>
					<ColumnText whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}>
						#PHP
					</ColumnText>
				</TextContainer>
			</SkillsColumn>
		</Container>
	);
};

export default Education;
