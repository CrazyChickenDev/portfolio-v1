import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ToastWrapper = styled.div`
	position: fixed;
	bottom: 20px;
	left: 20px;
	z-index: 9999;
	@media only screen and (max-width: 450px) {
		top: 20px;
		left: 10px;
	}
`;

const Toast = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	color: palevioletred;
	font-size: 20px;
	text-align: center;
	width: 300px;
	height: 40px;
	padding: 6px 8px;
	margin-bottom: 15px;
	border-radius: 3px;
	border-left: 6px solid palevioletred;
	box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
		0px 1px 18px 0px rgba(0, 0, 0, 0.12);
	font-family: 'Asap', sans-serif;
	@media only screen and (max-width: 450px) {
		width: 300px;
		height: 25px;
	}
`;

function Notification({ toast }) {
	return (
		<ToastWrapper>
			{toast.map((popup, index) => (
				<AnimatePresence key={index}>
					<motion.div
						initial={{ opacity: 0, y: 50, scale: 0.3 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}>
						<Toast>{popup}</Toast>
					</motion.div>
				</AnimatePresence>
			))}
		</ToastWrapper>
	);
}

export default Notification;
