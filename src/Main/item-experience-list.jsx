import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RightArrow } from '@styled-icons/boxicons-regular/';
import { dataExperience } from './data';

const Item = styled(motion.li)`
	cursor: pointer;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-right: 15px;
	line-height: 50px;
	border-radius: 5px;
	color: ${(props) => (props.index === props.selected ? 'white' : '#ffffff8f')};
	background: transparent;
	svg {
		width: 15px;
		padding-right: 0.5em;
		color: ${(props) => (props.index === props.selected ? 'white' : '#ffc200')};
		z-index: 2;
	}
	span {
		z-index: 2;
	}
	@media only screen and (max-width: 450px) {
		line-height: 37px;
	}
	@media only screen and (max-width: 350px) {
		margin-right: 5px;
	}
`;

const BackgroundTitle = styled(motion.div)`
	width: 305px;
	height: 100%;
	border-radius: 5px;
	background: #ffc200;
	position: absolute;
	z-index: 0;
	left: -10px;
	@media only screen and (max-width: 450px) {
		width: 265px;
	}
	@media only screen and (max-width: 400px) {
		width: 242px;
	}
`;

const ItemExperienceList = ({ item, index, handleClick, selected }) => {
	return (
		<Item animate key={index} index={index} selected={selected} onClick={() => handleClick(index)}>
			{index === selected && <BackgroundTitle layoutId='underline' />}
			<RightArrow />
			<motion.span whileTap={{ scale: 0.95 }}>{dataExperience.list[item].main}</motion.span>
		</Item>
	);
};

export default ItemExperienceList;
