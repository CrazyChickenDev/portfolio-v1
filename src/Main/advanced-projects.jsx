import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Passwordlist from '../assets/passlist.png';
import GraphicalPasswordStrategy from '../assets/Upcoming.png';
import Keylogger from '../assets/Keylogger.png';
import SafeFolderApp from '../assets/Upcoming.png';
import BFPasswordCracker from '../assets/Upcoming.png';
import { Github } from '@styled-icons/boxicons-logos';
import { ExternalLinkOutline } from '@styled-icons/evaicons-outline';
import BFPasswordCrackerVideo from '../assets/video.mov';

const Container = styled(motion.div)`
	padding-top: 2em;
	color: white;
	overflow: hidden;
	font-family: 'Asap', sans-serif;
	width: 100%;
`;

const Row = styled.div`
	padding: 4em 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media only screen and (max-width: 450px) {
		padding: 2em 0;
		flex-direction: ${(props) => (props.revert ? 'column-reverse' : 'column')};
	}
`;

const LeftRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.text ? 'flex-end' : 'flex-start')};
	width: ${(props) => (props.text ? '50%' : '50%')};
	height: 200px;
	height: ${(props) => (props.text ? '300px' : '250px')};
	border-radius: 5px;
	padding: 15px;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
		justify-content: center;
		padding: 0;
	}
`;

const RightRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.text ? 'flex-start' : 'flex-end')};
	width: ${(props) => (props.text ? '50%' : '50%')};
	height: 200px;
	height: ${(props) => (props.text ? '300px' : '250px')};
	border-radius: 5px;
	padding: 15px;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
		justify-content: center;
	}
`;

const ImgContainer = styled.div`
	width: 500px;
	height: 300px;
	position: relative;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 80%;
	}
`;
// eslint-disable-next-line
const VideoContainer = styled.div`
	position: absolute;
	top: 19px;
	left: 80px;
	width: 200px;
	height: 100px;
	@media only screen and (max-width: 450px) {
		top: 9px;
		left: 39px;
	}

	video {
		width: 395px;
		@media only screen and (max-width: 450px) {
			width: 186px;
		}
	}
`;

const Img = styled.img`
	height: 100%;
	@media only screen and (max-width: 450px) {
		height: auto;
		width: 100%;
	}
`;

const Card = styled.div`
	width: 85%;
	height: 80%;
	border-radius: 5px;
	padding: 25px 30px;
	background: #ffffff14;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
	@media only screen and (max-width: 450px) {
		width: 75%;
		padding: 15px 20px;
	}
`;

const Title = styled.h4`
	font-size: 22px;
	margin: 0;
	padding: 0;
	color: #ffc200;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 20px;
	}
`;

const Description = styled.h4`
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-weight: 300;
	margin: 0;
	padding: 0;
	padding: 10px 0;
	font-family: 'Calibre', sans-serif;
	font-family: 'Roboto', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 16px;
		line-height: 23px;
	}
`;

const Technology = styled.div`
	font-family: 'Roboto';
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;
const TechItems = styled.span`
	padding-right: 10px;
	padding-top: 10px;
	font-size: 16px;
	color: #ffffffbf;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;

const Hastag = styled.span`
	color: #ffc200;
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-top: 1em;
	a {
		color: white;
		text-decoration: none;
	}
`;

const Button = styled(motion.div)`
	padding: 0.5em;
	cursor: pointer;
	svg {
		width: 28px;
		@media only screen and (max-width: 450px) {
			width: 25px;
		}
	}
`;

const AdvancedProjects = ({ isMobile }) => {
	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={Passwordlist} alt='passlist.png' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>Passwordlist-Generator</Title>
						<Description>
						A simple python program that takes in a collection of data given to it, then generates possible password 
						combinations that can be gotten from those details that were fed into it. This program was created for 
						educational purposes and as a security research tool.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Python
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>VsCode
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Parrot OS
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Linux OS
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Bash
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a href='https://github.com/CrazyChickenDev/Passwordlist-Generator' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
							<a href='https://github.io/CrazyChickenDev/Passwordlist-Generator' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</RightRow>
			</Row>
			<Row revert={true}>
				<LeftRow text={true}>
					<Card>
						<Title>Keylogger</Title>
						<Description>A simply built keylogger created using python on a linux distro(Parrot OS) and 
							         used to record keystrokes made by users of the pc.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Python
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Pynput Library
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>VSCode
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Linux OS
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Bash
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a href='https://github.com/CrazyChickenDev/My-Keylogger' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
						<ButtonContainer>
							<a href='https://github.com/CrazyChickenDev/My-Keylogger' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={Keylogger} alt='Keylogger.png' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={SafeFolderApp} alt='SafeFolderApp' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>SafeFolder-App</Title>
						<Description>
							Description
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Framework
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>OS
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a
								href='https://github.com/CrazyChickenDev'
								target='_blank'
								rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
							<a href='https://nwaobidaniel.me/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</RightRow>
			</Row>
			<Row revert={true}>
				<LeftRow text={true}>
					<Card>
						<Title>Graphical-Password Strategy</Title>
						<Description>
							Description
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Framework
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Library
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>OS
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a href='https://github.com/CrazyChickenDev' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
							<a href='https://nwaobidaniel.me/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={GraphicalPasswordStrategy} alt='graphic-password' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={BFPasswordCracker} alt='BFPasswordCracker' />
						{/* {!isMobile && (
							<VideoContainer>
								<video muted controls autoPlay loop>
									<source
										src={BFPasswordCrackerVideo}
										type='video/mp4'
									/>
								</video>
							</VideoContainer>
						)} */}
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>BF Password Cracker</Title>
						<Description>
							Description
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Framework
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Library
							</TechItems>
						</Technology>
					</Card>
				</RightRow>
			</Row>
		</Container>
	);
};

export default AdvancedProjects;
