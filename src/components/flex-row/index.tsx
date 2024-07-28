import React from 'react';
import './style.scss';
import { FlexRowProps } from '@/components/flex-row/type';
import { ClassNames } from '@/modules/classNames';


const FlexRow: React.FC<FlexRowProps> = ({ stretch = false, children }) => {
	const CN = new ClassNames('row');


	return (
		<div className={CN.generate('', [...stretch ? ['stretch'] : []])}>
			{ children }
		</div>
	);
}

export default FlexRow;
