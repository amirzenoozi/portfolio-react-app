import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/container';
import FlexCol from '../../components/flex-col';
import FlexRow from '../../components/flex-row';
import Hyperlink from '../../components/hyperlink';
import Linkedin from '../../icons/linkedin';
import Icon from '@icon-park/react/es/all';
import links from '../../constants/links.json';
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
	const iVahidObjectives: Array<string> = new Array(5).fill(0).map((item, index) => t(`ivahid.${index}`));
	const rabinObjectives: Array<string> = new Array(3).fill(0).map((item, index) => t(`rabin.${index}`));

	const experiencesList: Array<Experience> = [
		{
			title: 'Cloud Company',
			type: 'Hybrid',
			position: 'Senior Front-End Developer',
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
	]

	return (
		<>
			<section className={'hero'}>
				<span className={'hero-circle hero-circle--one'} />
				<span className={'hero-circle hero-circle--two'} />
				<Container>
					<FlexRow>
						<FlexCol xs={24} sm={24} md={18}>
							<div className={'hero-content'}>
								<h1>Hi, 👋🏻<br/> <i>I'm</i> Amirhossein</h1>
								<p>
									Experienced working as a front-end developer in several software development companies
									in Iran for more than 7 years. Worked on
									many successful projects and collaborated with many technical teams. Curious about new
									software technologies and eager about
									learning them. Making an automated process in a large-scale team is my second
									superpower.
								</p>
								<div className={'hero-actions'}>
									<Hyperlink
										icon={true}
										variant={'linear-light'}
										to={links["social"]["linkedin"]}
										target="_blank"
										data-tooltip-id="tooltip-area"
										data-tooltip-content="LinkedIn"
										data-tooltip-place="bottom"
									>
										<Linkedin size={24} />
									</Hyperlink>
									<Hyperlink
										icon={true}
										variant={'linear-light'}
										to={links["social"]["github"]}
										target="_blank"
										data-tooltip-id="tooltip-area"
										data-tooltip-content="Github"
										data-tooltip-place="bottom"
									>
										<Icon type="Github" theme="filled" size={24} />
									</Hyperlink>
									<Hyperlink
										icon={true}
										variant={'linear-light'}
										to={links["social"]["dribble"]}
										target="_blank"
										data-tooltip-id="tooltip-area"
										data-tooltip-content="Dribble"
										data-tooltip-place="bottom"
									>
										<Icon type="Dribble" theme="filled" size={24} />
									</Hyperlink>
									<Hyperlink
										icon={true}
										variant={'linear-light'}
										to={links["social"]["behance"]}
										target="_blank"
										data-tooltip-id="tooltip-area"
										data-tooltip-content="Behance"
										data-tooltip-place="bottom"
									>
										<Icon type="Behance" theme="filled" size={24} />
									</Hyperlink>
								</div>
							</div>
						</FlexCol>
						<FlexCol xs={24} sm={24} md={6} center={true}>
							<div className={'hero-image'}>
								<figure>
									<img src={'Hero.jpg'} alt="Amirhossein Douzandeh"/>
								</figure>
							</div>
						</FlexCol>
					</FlexRow>
				</Container>
			</section>
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
								{cloudObjectives.map((objective: string, index: number) => (
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
		</>
	);
}

export default Home;
