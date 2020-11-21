import React from 'react';
import Hero from './hero';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';
import About from './about';

const Main = ({ didScroll, handleToast, heroRef, expRef, skillsRef, projectRef, aboutRef }) => {
	return (
		<>
			<Hero didScroll={didScroll} handleToast={handleToast} heroRef={heroRef} />
			<Experience expRef={expRef} />
			<Skills skillsRef={skillsRef} />
			<Projects projectRef={projectRef} />
			<About aboutRef={aboutRef} />
		</>
	);
};

export default Main;
