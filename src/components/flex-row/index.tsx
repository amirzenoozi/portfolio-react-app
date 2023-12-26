import React from 'react';
import './style.scss';

interface FlexRowProps {
	stretch?: boolean;
	children: React.ReactNode;
}

const FlexRow: React.FC<FlexRowProps> = ({ stretch = false, children }) => {
	return (
		<div className={['row', stretch && 'row--stretch'].join(' ')}>
			{ children }
		</div>
	);
}

export default FlexRow;
