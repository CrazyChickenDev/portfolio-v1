import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CarbonFootprint from '../assets/carbon-footprint.png';
import MarcoPolo from '../assets/marco-polo.png';
import Wanteat from '../assets/wanteat.png';
import NinjaSimulation from '../assets/ninja-simulation.png';
import AmmoTank from '../assets/ammo-tank.png';
import { Github } from '@styled-icons/boxicons-logos';
import { ExternalLinkOutline } from '@styled-icons/evaicons-outline';

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
	font-size: 24px;
	margin: 0;
	padding: 0;
	color: palevioletred;
	font-family: 'Calibre', sans-serif;
	@media only screen and (max-width: 450px) {
		font-size: 20px;
	}
`;

const Description = styled.h4`
	margin: 0;
	padding: 0;
	font-size: 18px;
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
	font-size: 18px;
	color: #ffffffbf;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;

const Hastag = styled.span`
	color: palevioletred;
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
		width: 30px;
		@media only screen and (max-width: 450px) {
			width: 27px;
		}
	}
`;

const AdvancedProjects = ({ isMobile }) => {
	return (
		<Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={CarbonFootprint} alt='carbon-footprint' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>Carbon Footprint Calculator</Title>
						<Description>
							An open-source project about calculating the carbon foootprint for individuals and small
							companies.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>React
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Hooks
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Styled-components
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>React-three-fiber
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Material-ui
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a href='https://github.com/Achiaga/carbon_footprint' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: 'palevioletred' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
							<a href='https://footprint.now.sh/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: 'palevioletred' }} transition={{ duration: 0.5 }}>
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
						<Title>Wanteat App</Title>
						<Description>Healthy mealplan generator to maintain your diet without getting bored.</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>React
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Hooks
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Styled-components
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Api
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Fauna
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a href='https://wanteat.app/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: 'palevioletred' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={Wanteat} alt='wanteat' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={NinjaSimulation} alt='ninja-simulation' />
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>Ninja Simulation</Title>
						<Description>
							A threejs project to show graphically differents statistics' theories. So the user can visualize
							them. The objective is to build a web that can take statics' theories as input and run them
							graphically automatically.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Javascript
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Threejs
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Webpack
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Blender
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a
								href='https://github.com/Achiaga/Analytics_simulations'
								target='_blank'
								rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: 'palevioletred' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
							<a href='https://analytics-simulations.vercel.app/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: 'palevioletred' }} transition={{ duration: 0.5 }}>
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
						<Title>Marco Polo</Title>
						<Description>
							A project is to see graphically how many countries you have visited and the percentage of the
							world you have visited. You can also share it with friends to see who is the most adventurous.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>React
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Hooks
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Styled-components
							</TechItems>
						</Technology>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Datamaps
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Jsonwebtoke
							</TechItems>
						</Technology>
						<ButtonContainer>
							<a href='https://github.com/Achiaga/marco-polo' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: 'palevioletred' }} transition={{ duration: 0.5 }}>
									<Github />
								</Button>
							</a>
							<a href='https://mytrips.now.sh/' target='_blank' rel='noopener noreferrer'>
								<Button whileHover={{ y: [0, -8, 0], color: 'palevioletred' }} transition={{ duration: 0.5 }}>
									<ExternalLinkOutline />
								</Button>
							</a>
						</ButtonContainer>
					</Card>
				</LeftRow>
				<RightRow text={false}>
					<ImgContainer>
						<Img src={MarcoPolo} alt='marco-polo' />
					</ImgContainer>
				</RightRow>
			</Row>
			<Row>
				<LeftRow text={false}>
					<ImgContainer>
						<Img src={AmmoTank} alt='ammo-tank' />
						{/* {!isMobile && (
							<VideoContainer>
								<video muted controls autoPlay loop>
									<source
										src='https://bender-portfolio.s3.amazonaws.com/Grabacio%CC%81n+de+pantalla+2020-09-14+a+las+21.23.43.mov'
										type='video/mp4'
									/>
								</video>
							</VideoContainer>
						)} */}
					</ImgContainer>
				</LeftRow>
				<RightRow text={true}>
					<Card>
						<Title>Ammo Tank</Title>
						<Description>
							A Threejs project about a dynamic tank with physics which can shoot balls to boxes, jump over
							ramps and collide with other objects. It is not currently online but you can see a short demo of
							it.
						</Description>
						<Technology>
							<TechItems>
								<Hastag>#</Hastag>Javascript
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Threejs
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Ammojs
							</TechItems>
							<TechItems>
								<Hastag>#</Hastag>Webpack
							</TechItems>
						</Technology>
					</Card>
				</RightRow>
			</Row>
		</Container>
	);
};

export default AdvancedProjects;
