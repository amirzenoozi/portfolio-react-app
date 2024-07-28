import React from 'react';
import Icon from '@icon-park/react/es/all';
import Container from '../../../../components/container';
import FlexRow from '../../../../components/flex-row';
import FlexCol from '../../../../components/flex-col';
import Hyperlink from '../../../../components/hyperlink';
import Linkedin from '../../../../icons/linkedin';
import links from '../../../../constants/links.json';
import './hero.style.scss';
import { ClassNames } from '../../../../modules/classNames';



function HeroSection() {
	const CN = new ClassNames('hero');

	return (
		<section className={CN.generate('')}>
			<span className={CN.generate('circle', ['one'])}/>
			<span className={CN.generate('circle', ['two'])}/>
			<Container>
				<FlexRow>
					<FlexCol xs={24} sm={24} md={18}>
						<div className={CN.generate('content')}>
							<h1>Hi, 👋🏻<br/> <i>I'm</i> Amirhossein</h1>
							<p>
								Experienced working as a front-end developer in several software development companies
								in Iran for more than 7 years. Worked on
								many successful projects and collaborated with many technical teams. Curious about new
								software technologies and eager about
								learning them. Making an automated process in a large-scale team is my second
								superpower.
							</p>
							<div className={CN.generate('actions')}>
								<Hyperlink
									variant={'primary-light'}
									to={links["social"]["resume"]}
									target="_blank"
									data-tooltip-id="tooltip-area"
									data-tooltip-content="LinkedIn"
									data-tooltip-place="bottom"
								>
									<Icon type={'DownloadTwo'} size={24}/> Download CV
								</Hyperlink>
								<Hyperlink
									icon={true}
									variant={'linear-light'}
									to={links["social"]["linkedin"]}
									target="_blank"
									data-tooltip-id="tooltip-area"
									data-tooltip-content="LinkedIn"
									data-tooltip-place="bottom"
								>
									<Linkedin size={24}/>
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
									<Icon type="Github" theme="filled" size={24}/>
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
									<Icon type="Dribble" theme="filled" size={24}/>
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
									<Icon type="Behance" theme="filled" size={24}/>
								</Hyperlink>
							</div>
						</div>
					</FlexCol>
					<FlexCol xs={24} sm={24} md={6} center={true}>
						<div className={CN.generate('image')}>
							<figure>
								<img src={'Hero.jpg'} alt="Amirhossein Douzandeh"/>
							</figure>
						</div>
					</FlexCol>
				</FlexRow>
			</Container>
			<span className={'hero-mouse'}/>
		</section>
	);
}

export default HeroSection;
