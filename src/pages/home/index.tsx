import React from 'react';
import HeroSection from './components/hero/hero.section';
import MediumSection from './components/medium/medium.section';
import ExperienceSection from './components/experience/experience.section';
import './style.scss';


function Home() {

	return (
		<>
			<HeroSection />
			<ExperienceSection />
			<MediumSection />
		</>
	);
}

export default Home;
