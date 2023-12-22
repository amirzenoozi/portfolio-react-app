import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../components/container';
import FlexCol from '../../components/flex-col';
import FlexRow from '../../components/flex-row';
import JavaScript from '../../icons/JavaScript';
import TypeScript from '../../icons/TypeScript';
import Python from '../../icons/Python';
import Bash from '../../icons/Bash';
import ReactJs from '../../icons/React';
import Angular from '../../icons/Angular';
import WordPress from '../../icons/WordPress';
import D3 from '../../icons/D3';
import ChartJs from '../../icons/ChartJs';
import Notification from '../../icons/Notification';
import VueJs from '../../icons/VueJs';
import Gulp from '../../icons/Gulp';
import WebpackIcon from '../../icons/WebpackIcon';
import Flask from '../../icons/Flask';
import ExpressJs from '../../icons/ExpressJs';
import FastAPI from '../../icons/FastAPI';
import GraphQL from '../../icons/GraphQL';
import RestAPI from '../../icons/RestAPI';
import MariaDB from '../../icons/MariaDB';
import Elementor from '../../icons/Elementor';
import MongoDB from '../../icons/MongoDB';
import Selenium from '../../icons/Selenium';
import UnitTest from '../../icons/UnitTest';
import JestIcon from '../../icons/JestIcon';
import Docker from '../../icons/Docker';
import GitLab from '../../icons/GitLab';
import ActionsIcon from '../../icons/ActionsIcon';
import './style.scss';


function Skills() {
	const skillsIconSize: number = 80;
	const skillsList: Array<any> = [
		{
			title: 'Programming Languages',
			items: [
				{
					title: 'TypeScript',
					icon: <TypeScript size={skillsIconSize} />,
				},
				{
					title: 'JavaScript',
					icon: <JavaScript size={skillsIconSize} />,
				},
				{
					title: 'Python',
					icon: <Python size={skillsIconSize} />,
				},
				{
					title: 'Bash',
					icon: <Bash size={skillsIconSize} />,
				},
			]
		},
		{
			title: 'Frameworks & Libraries',
			items: [
				{
					title: 'React',
					icon: <ReactJs size={skillsIconSize} />,
				},
				{
					title: 'Angular',
					icon: <Angular size={skillsIconSize} />,
				},
				{
					title: 'VueJs',
					icon: <VueJs size={skillsIconSize} />,
				},
				{
					title: 'WordPress',
					icon: <WordPress size={skillsIconSize} />,
				},
				{
					title: 'Elementor',
					icon: <Elementor size={skillsIconSize} />,
				},
				{
					title: 'D3',
					icon: <D3 size={skillsIconSize} />,
				},
				{
					title: 'Chart.js',
					icon: <ChartJs size={skillsIconSize} />,
				},
				{
					title: 'WebSocket',
					icon: <Notification size={skillsIconSize} />,
				},
				{
					title: 'Gulp',
					icon: <Gulp size={skillsIconSize} />,
				},
				{
					title: 'Webpack',
					icon: <WebpackIcon size={skillsIconSize} />,
				}
			]
		},
		{
			title: 'Back-End',
			items: [
				{
					title: 'ExpressJs',
					icon: <ExpressJs size={skillsIconSize} />,
				},
				{
					title: 'FastAPI',
					icon: <FastAPI size={skillsIconSize} />,
				},
				{
					title: 'GraphQL',
					icon: <GraphQL size={skillsIconSize} />,
				},
				{
					title: 'RestAPI',
					icon: <RestAPI size={skillsIconSize} />,
				},
				{
					title: 'Flask',
					icon: <Flask size={skillsIconSize} />,
				},
				{
					title: 'MariaDB',
					icon: <MariaDB size={skillsIconSize} />,
				},
				{
					title: 'MongoDB',
					icon: <MongoDB size={skillsIconSize} />,
				},
			]
		},
		{
			title: 'Testing',
			items: [
				{
					title: 'Cypress',
					icon: <UnitTest size={skillsIconSize} />,
				},
				{
					title: 'Selenium',
					icon: <Selenium size={skillsIconSize} />,
				},
				{
					title: 'Jest',
					icon: <JestIcon size={skillsIconSize} />,
				},
			]
		},
		{
			title: 'DevOps',
			items: [
				{
					title: 'Docker',
					icon: <Docker size={skillsIconSize} />,
				},
				{
					title: 'GitLab CI',
					icon: <GitLab size={skillsIconSize} />,
				},
				{
					title: 'Actions',
					icon: <ActionsIcon size={skillsIconSize} />,
				},
			]
		}
	]

	return (
		<>
			<section className={'skill'}>
				<span className={'skill-circle skill-circle--one'} />
				<span className={'skill-circle skill-circle--two'} />
				<Container>
					{skillsList.map((section: any) => (
						<div className={'skill-section'}>
							<h2>{section.title}:</h2>
							<FlexRow>
								{section.items.map((item: any) => (
									<FlexCol xs={12} sm={8} md={6} lg={4} xl={3}>
										<div className={'skill-item'}>
											<div className={'skill-content'}>
												{item.icon}
												<p>{item.title}</p>
											</div>
										</div>
									</FlexCol>
								))}
							</FlexRow>
						</div>
					))}
				</Container>
			</section>
		</>
	);
}

export default Skills;
