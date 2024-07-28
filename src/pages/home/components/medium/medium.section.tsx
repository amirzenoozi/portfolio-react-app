import React from 'react';
import Container from '../../../../components/container';
import FlexRow from '../../../../components/flex-row';
import FlexCol from '../../../../components/flex-col';
import { MediumCard } from './medium.interface';
import './medium.style.scss';



function MediumSection() {
	const blogNewsList: Array<MediumCard> = [
		{
			link: 'https://amirzenoozi.medium.com/top-5-hr-interview-questions-answers-4bba93a21c8e',
			title: 'Top 5 HR Interview Questions + Answers',
			image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*JtmuKA63Rk4pLKTiIZ0yTg.jpeg',
			description: 'If you are actively seeking a new job position, this Medium article is a must-read. Often, your first interview will be a brief meeting with the HR team. In this initial interaction, there are no definitive right or wrong answers, but it’s crucial to respond honestly and align your answers with the company’s values and expectations. As a result, this can be the most challenging interview compared to others in the hiring process.',
		},
		{
			link: 'https://amirzenoozi.medium.com/decoding-persian-news-unleashing-the-power-of-analytics-86868be4756b',
			title: 'Decoding Persian News: Unleashing the Power of Analytics',
			image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*GBCVi-VCviTgc_9oT5Wy8Q.jpeg',
			description: 'Welcome to an exciting journey where we explore Persian News through the lens of analytics. Join me as we dive into the world of news analysis and uncover meaningful insights using charts and numbers. In this exploration, we aim to shed light on Persian News stories by harnessing the power of data visualization and quantitative analysis.',
		},
		{
			link: 'https://amirzenoozi.medium.com/make-a-simple-url-shortener-app-with-node-js-express-js-rest-api-5cce40413d2b',
			title: 'Make a Simple URL Shortener app with Node.js & Express.js + Rest API',
			image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*L3tLt-PRP6hs--1oiq6Fbg.png',
			description: 'Have you ever thought to learn a Node.js ? Trying out simple projects such as ToDoApps & WeathersApp will help you learn new things quickly so I decided to create a simple URL shortener with Node.js & Express.js and become familiar with Node.js Applications.',
		},
		{
			link: 'https://amirzenoozi.medium.com/how-to-have-angular-environment-structure-in-react-applications-without-cra-e970443e9068',
			title: 'How To Have Angular Environment Structure in React Applications Without CRA',
			image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ctW9S9Y5nAAqL7a45Dk4AA.png',
			description: 'If you have an experience with Angular you are familiar with the environment structure in this project I think it’s so cool to have a different environment value in development and production mode in React applications so I decide to use this structure in React applications.',
		},
		{
			link: 'https://amirzenoozi.medium.com/find-dominant-common-color-with-telegram-bot-b5bfad2b8fe8',
			title: 'Find Dominant Common Color With Telegram Bot',
			image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*WH1Kyb4Ixpf8JnJpWf8bzg.jpeg',
			description: 'In the last few days, I decided to play with the telegram bot but I need to have a simple scenario for my application so I think “finding the most common colors” can be the best choice for me.',
		}
	]
	return (
		<section className={'links'}>
			<Container>
				<FlexRow stretch={true}>
					{blogNewsList.map((item: MediumCard) => (
						<FlexCol
							xs={24}
							sm={12}
							md={8}
							xl={6}
						>
							<a
								className={'links-item'}
								href={item.link}
								target={'_blank'}
								rel="noreferrer"
							>
								<figure>
									<img src={item.image} alt={item.title}/>
								</figure>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</a>
						</FlexCol>
					))}
				</FlexRow>
			</Container>
		</section>
	);
}

export default MediumSection;
