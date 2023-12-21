import React from 'react';
import './style.scss';

interface FlexRowProps {
	children: React.ReactNode;
}

const FlexRow: React.FC<FlexRowProps> = ({ children }) => {
	return (
		<div className={'row'}>
			{ children }
		</div>
	);
}

export default FlexRow;
