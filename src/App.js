import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { InitializeAnalytics } from './utils/analytics';
import Theme from './Theme';
import Header from './Header/navbar-header';
import Sidebar from './Sidebar/sidebar';
import MobileContactInfo from './Sidebar/mobile-contact-info';
import Main from './Main/main';
import Notification from './Notification/notification';
import Footer from './Footer/footer';

const AppContainer = styled.div`
	background: #1e1e1e;
	font-family: 'Nunito', sans-serif;
`;

function App() {
	const [scrollProgress, setScrollProgress] = useState('20%');
	const [didScroll, setDidScroll] = useState(false);
	const [toast, setToast] = useState([]);
	const [isSafari, setIsSafari] = useState(false);

	const heroRef = useRef(null);
	const expRef = useRef(null);
	const skillsRef = useRef(null);
	const projectRef = useRef(null);
	const aboutRef = useRef(null);

	useEffect(() => {
		try {
			InitializeAnalytics();
		} catch (err) {
			console.log('HOTJAR not working on local');
		}
		listenToScrollEvent();
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf('safari') !== -1) {
			if (ua.indexOf('chrome') > -1) {
				setIsSafari(false); // Chrome
			} else {
				setIsSafari(true); // Safari
			}
		}
	}, []);

	const listenToScrollEvent = () => {
		document.addEventListener('scroll', () => {
			let scrolled;
			const yPos = window.scrollY;
			if (yPos < 150) scrolled = `20%`;
			if (yPos > 140) setDidScroll(true);
			if (yPos > 150) {
				scrolled = `${((yPos - 140) * 20) / 720 + 20}%`;
			}
			if (yPos > 860) {
				scrolled = `${((yPos - 860) * 20) / 650 + 40}%`;
			}
			if (yPos > 1510) {
				scrolled = `${((yPos - 1510) * 20) / 650 + 60}%`;
			}
			if (yPos > 2160) {
				scrolled = `${((yPos - 2160) * 20) / 2720 + 80}%`;
			}
			if (yPos > 4880) scrolled = `100%`;

			return setScrollProgress(scrolled);
		});
	};

	const handleScroll = (e) => {
		const { id } = e.currentTarget;
		if (id === 'intro') return scrollToRef(heroRef);
		if (id === 'exp') return scrollToRef(expRef);
		if (id === 'skills') return scrollToRef(skillsRef);
		if (id === 'project') return scrollToRef(projectRef);
		if (id === 'about') return scrollToRef(aboutRef);
		return scrollToRef(heroRef);
	};

	const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

	const handleToast = (msg) => {
		setToast((oldVal) => [...oldVal, msg]);
		setTimeout(() => {
			setToast((oldState) => oldState.splice(1, 1));
		}, 3000);
	};

	return (
		<Theme>
			<AppContainer>
				<Header
					isSafari={isSafari}
					scrollProgress={scrollProgress}
					handleScroll={handleScroll}
					setDidScroll={setDidScroll}
				/>
				<Sidebar handleToast={handleToast} />
				<MobileContactInfo handleToast={handleToast} />
				<Notification toast={toast} />
				<Main
					heroRef={heroRef}
					expRef={expRef}
					skillsRef={skillsRef}
					projectRef={projectRef}
					aboutRef={aboutRef}
					handleToast={handleToast}
					didScroll={didScroll}
				/>
				<Footer />
			</AppContainer>
		</Theme>
	);
}

export default App;
