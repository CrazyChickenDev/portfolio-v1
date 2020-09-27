import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Github } from '@styled-icons/boxicons-logos';
import { ExternalLinkOutline } from '@styled-icons/evaicons-outline';
import Blockchain from '../assets/Upcoming.png';
import GitHubApp from '../assets/Upcoming.png';
import Candy from '../assets/Upcoming.png';
import ToDo from '../assets/Upcoming.png';
import SpaceBar from '../assets/Upcoming.png';
import RGB from '../assets/Upcoming.png';
import RedditBot from '../assets/Upcoming.png';
import ToDoApp from '../assets/Upcoming.png';
import TwitterBot from '../assets/Upcoming.png';
import Weather from '../assets/Upcoming.png';
import MP3Player from '../assets/Upcoming.png';
import Portfolio from '../assets/demo.png';

const Container = styled(motion.div)`
	width: 100%;
	color: white;
	overflow: hidden;
	padding-top: 2em;
	font-family: 'Asap', sans-serif;
	@media only screen and (max-width: 450px) {
		padding-top: 1em;
	}
`;

const CardRow = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	padding: 1em 0;
	@media only screen and (max-width: 450px) {
		display: block;
		padding: 0;
	}
`;

const Card = styled(motion.div)`
	position: relative;
	height: 380px;
	width: 400px;
	border-radius: 5px;
	padding: 15px;
	background: #ffffff14;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
	@media only screen and (max-width: 450px) {
		width: auto;
		margin: 2em 0;
		padding: 10px 15px;
		height: 400px;
	}
`;

const ImgContainer = styled.div`
	height: 210px;
	padding-top: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LinkContainer = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	padding-right: 15px;
	padding-bottom: 15px;
	a {
		color: white;
		text-decoration: none;
	}
`;

const Button = styled(motion.div)`
	padding: 0.5em;
	cursor: pointer;
	svg {
		width: 30px;
	}
`;

const Img = styled.img`
	border-radius: 5px;
	height: 100%;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;
	@media only screen and (max-width: 450px) {
		width: 100%;
	}
`;

const TextContainer = styled.div`
	padding-left: 1em;
	padding-top: 1em;
	@media only screen and (max-width: 450px) {
		padding: 0.7em 0;
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
`;

const Explanation = styled.p`
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-weight: 300;
	margin: 0;
	padding: 0;
	padding: 10px 0;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		padding-bottom: 15px;
		font-size: 16px;
	}
`;

const Technology = styled.div`
	font-family: 'Roboto', sans-serif;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;

const TechItems = styled.span`
	padding-right: 5px;
	padding-top: 0px;
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
	justify-content: center;
`;

const ButtonShow = styled(motion.button)`
	margin-top: 2em;
	padding: 0.7em 1em;
	font-size: 14px;
	font-weight: 600;
	color: #1f1f1f;
	font-family: 'Calibre', sans-serif;
	cursor: pointer;
`;

const Link = ({ githubLink, externalLink }) => {
	return (
		<LinkContainer>
			<a href={githubLink} target='_blank' rel='noopener noreferrer'>
				<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
					<Github />
				</Button>
			</a>
			<a href={externalLink} target='_blank' rel='noopener noreferrer'>
				<Button whileHover={{ y: [0, -8, 0], color: '#ffc200' }} transition={{ duration: 0.5 }}>
					<ExternalLinkOutline />
				</Button>
			</a>
		</LinkContainer>
	);
};

const BeginnerProjects = () => {
	const [showMore, setShowMore] = useState(false);

	const handleShowMore = () => setShowMore(true);

	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
			<CardRow>
				<Card>
					<Link
						githubLink='https://github.com/CrazyChickenDev/MyPortfolio'
						externalLink='https://nwaobidaniel.me/'
					/>
					<ImgContainer>
						<Img src={Portfolio} alt='portfolio' />
					</ImgContainer>
					<TextContainer>
						<Title>Portfolio</Title>
						<Explanation>My Portfolio website created using ReactJs and deployed on Netlify</Explanation>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>ReactJs
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>CSS
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>JavaScript
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>HTML
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>VSCode
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
				<Card>
					<Link
						githubLink='https://github.com/CrazyChickenDev/'
						externalLink='https://nwaobidaniel.me/'
					/>
					<ImgContainer>
						<Img src={MP3Player} alt='MP3Player' />
					</ImgContainer>
					<TextContainer>
						<Title>MP3 Player</Title>
						<Explanation>Description</Explanation>
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
								<Hastag>#</Hastag>Api
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>OS
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
			</CardRow>
			<CardRow>
				<Card>
					<Link
						githubLink='https://github.com/CrazyChickenDev/'
						externalLink='https://github.com/CrazyChickenDev/'
					/>
					<ImgContainer>
						<Img src={ToDoApp} alt='todo-app' />
					</ImgContainer>
					<TextContainer>
						<Title>To-Do App</Title>
						<Explanation>Description</Explanation>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Framework
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
				<Card>
					<Link
						githubLink='https://github.com/CrazyChickenDev/'
						externalLink='https://github.com/CrazyChickenDev/'
					/>
					<ImgContainer>
						<Img src={Weather} alt='weather' />
					</ImgContainer>
					<TextContainer>
						<Title>Weather</Title>
						<Explanation>Description</Explanation>
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
					</TextContainer>
				</Card>
			</CardRow>
			<CardRow>
				<Card>
					<Link
						githubLink='https://github.com/CrazyChickenDev/'
						externalLink='https://github.com/CrazyChickenDev/'
					/>
					<ImgContainer>
						<Img src={TwitterBot} alt='twitterbot' />
					</ImgContainer>
					<TextContainer>
						<Title>Twitter Bot</Title>
						<Explanation>Description</Explanation>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Frameworks
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>OS
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
				<Card>
					<Link
						githubLink='https://github.com/CrazyChickenDev/'
						externalLink='https://github.com/CrazyChickenDev/'
					/>
					<ImgContainer>
						<Img src={RedditBot} alt='redditbot' />
					</ImgContainer>
					<TextContainer>
						<Title>Reddit Bot</Title>
						<Explanation>Description</Explanation>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Language
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Frameworks
							</TechItems>
						</Technology>
					</TextContainer>
				</Card>
			</CardRow>
			{!showMore && (
				<ButtonContainer>
					<ButtonShow whileHover={{ y: [0, -8, 0] }} transition={{ duration: 0.5 }} onClick={handleShowMore}>
						Show more
					</ButtonShow>
				</ButtonContainer>
			)}
			{showMore && (
				<>
					<CardRow>
						<Card>
							<Link
								githubLink='https://github.com/CrazyChickenDev/'
								externalLink='https://github.com/CrazyChickenDev/'
							/>
							<ImgContainer>
								<Img src={Blockchain} alt='blockchain' />
							</ImgContainer>
							<TextContainer>
								<Title>Blockchain</Title>
								<Explanation>Description</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>Language
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>OS
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
						<Card>
							<Link
								githubLink='https://github.com/CrazyChickenDev/'
								externalLink='https://github.com/CrazyChickenDev/'
							/>
							<ImgContainer>
								<Img src={GitHubApp} alt='gitHubapp' />
							</ImgContainer>
							<TextContainer>
								<Title>GitHub App</Title>
								<Explanation>Description</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>Language
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>Framework
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
					</CardRow>
					<CardRow>
						<Card>
							<Link
								githubLink='https://github.com/CrazyChickenDev/'
								externalLink='https://github.com/CrazyChickenDev/'
							/>
							<ImgContainer>
								<Img src={Candy} alt='candy' />
							</ImgContainer>
							<TextContainer>
								<Title>Candy Store</Title>
								<Explanation>Candy store web simple design.</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>HTML
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>CSS
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
						<Card>
							<Link
								githubLink='https://github.com/CrazyChickenDev/'
								externalLink='https://github.com/CrazyChickenDev/'
							/>
							<ImgContainer>
								<Img src={ToDo} alt='to-do' />
							</ImgContainer>
							<TextContainer>
								<Title>To-Do List</Title>
								<Explanation>A simple to-do list.</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>HTML
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>Javascript
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>CSS
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
					</CardRow>
					<CardRow>
						<Card>
							<Link
								githubLink='https://github.com/CrazyChickenDev/'
								externalLink='https://github.com/CrazyChickenDev/'
							/>
							<ImgContainer>
								<Img src={SpaceBar} alt='space-bar' />
							</ImgContainer>
							<TextContainer>
								<Title>Space Bar Game</Title>
								<Explanation>The classic space bar game.</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>Javascript
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>CSS
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
						<Card>
							<Link
								githubLink='https://github.com/CrazyChickenDev/'
								externalLink='https://github.com/CrazyChickenDev/'
							/>
							<ImgContainer>
								<Img src={RGB} alt='rgb-game' />
							</ImgContainer>
							<TextContainer>
								<Title>RGB Game</Title>
								<Explanation>A simple game to practice your RGB skills.</Explanation>
								<Technology>
									<TechItems>
										<Hastag>#</Hastag>Javascript
									</TechItems>
									<TechItems>
										<Hastag>#</Hastag>CSS
									</TechItems>
								</Technology>
							</TextContainer>
						</Card>
					</CardRow>
				</>
			)}
		</Container>
	);
};

export default BeginnerProjects;
