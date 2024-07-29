import React from 'react';
import Container from '@/components/container';
import FlexRow from '@/components/flex-row';
import FlexCol from '@/components/flex-col';
import useMediums from '@/hooks/useMediums';
import { ClassNames } from '@/modules/classNames';
import { MediumCard } from './type';
import './medium.style.scss';


function MediumSection() {
	const CN = new ClassNames('medium');
	const { items } = useMediums();
	return (
		<section className={CN.generate('')}>
			<Container>
				<FlexRow stretch={true}>
					{items.map((item: MediumCard, index: number) => (
						<FlexCol
							xs={24}
							sm={12}
							md={8}
							xl={6}
							key={index}
						>
							<a
								className={CN.generate('card')}
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
