import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/container';
import Icon from '@icon-park/react/es/all';
import HeroSection from './components/hero/hero.section';
import MediumSection from './components/medium/medium.section';
import './style.scss';

interface Experience {
	title: string;
	type: string;
	position: string;
	location: string;
	date: string;
	translation_key: string;
	objectives: string[];
}


function Home() {
	const {t} = useTranslation(['experience']);
	const cloudObjectives: Array<string> = new Array(7).fill(0).map((item, index) => t(`cloud.${index}`));
	const sensifaiObjectives: Array<string> = new Array(7).fill(0).map((item, index) => t(`sensifai.${index}`));
	const garousianObjectives: Array<string> = new Array(5).fill(0).map((item, index) => t(`garousian.${index}`));
	const noxowlObjectives: Array<string> = new Array(5).fill(0).map((item, index) => t(`noxowl.${index}`));
	const iVahidObjectives: Array<string> = new Array(4).fill(0).map((item, index) => t(`ivahid.${index}`));
	const rabinObjectives: Array<string> = new Array(3).fill(0).map((item, index) => t(`rabin.${index}`));

	const experiencesList: Array<Experience> = [
		{
			title: 'Arvan Cloud Co.',
			type: 'Hybrid',
			position: 'Senior JavaScript Engineer',
			location: 'Tehran, Iran',
			date: 'Sep. 2021 - Present',
			translation_key: 'cloud',
			objectives: cloudObjectives,
		},
		{
			title: 'Sensifai Co.',
			type: 'Remote',
			position: 'Senior Front-End Developer',
			location: 'Belgium',
			date: 'Sep. 2018 - Sep. 2021',
			translation_key: 'sensifai',
			objectives: sensifaiObjectives,
		},
		{
			title: 'Garousian Studio',
			type: 'Contract',
			position: 'Front-End & WordPress Developer',
			location: 'Tehran, Iran',
			date: 'Oct. 2017 - Dec. 2020',
			translation_key: 'garousian',
			objectives: garousianObjectives,
		},
		{
			title: 'NoxOwl',
			type: 'Remote',
			position: 'Front-End Developer',
			location: 'Tehran, Iran',
			date: 'Dec. 2017 - Jul. 2018',
			translation_key: 'noxowl',
			objectives: noxowlObjectives,
		},
		{
			title: 'iVahid',
			type: 'On-Site',
			position: 'Front-End & WordPress Developer',
			location: 'Tehran, Iran',
			date: 'Apr. 2017 - Oct. 2017',
			translation_key: 'ivahid',
			objectives: iVahidObjectives,
		},
		{
			title: 'Rabin',
			type: 'On-Site',
			position: 'Front-End Developer',
			location: 'Tehran, Iran',
			date: 'Apr. 2016 - Nov. 2016',
			translation_key: 'rabin',
			objectives: rabinObjectives,
		}
	];

	return (
		<>
			<HeroSection />
			<section className={'experience'}>
				<span className={'experience-circle experience-circle--one'} />
				<span className={'experience-circle experience-circle--two'} />
				<span className={'experience-circle experience-circle--three'} />
				<span className={'experience-circle experience-circle--four'} />
				<Container>
					{experiencesList.map((item: Experience) => (
						<div className={'experience-item'}>
							<span className={'experience-bullet'}></span>
							<span>{item.title} <em>({item.type})</em></span>
							<h2>{ item.position }</h2>
							<div className={'experience-details'}>
								<span>{ item.location }</span>
								<p>{ item.date }</p>
							</div>
							<ul>
								{item.objectives.map((objective: string, index: number) => (
									<li className={'experience-objective'} key={`${item.translation_key}_${index}`}>
										<Icon type={'Dot'} theme={'outline'} size={24} />
										<p>{objective}</p>
									</li>
								))}
							</ul>
						</div>
					))}
				</Container>
			</section>
			<MediumSection />
		</>
	);
}

export default Home;
