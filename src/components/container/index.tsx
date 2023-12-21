import React from 'react';
import './style.scss';

interface FlexRowProps {
	children: React.ReactNode;
}

const Container: React.FC<FlexRowProps> = ({ children }) => {
	return (
		<div className={'container'}>
			{ children }
		</div>
	);
}

export default Container;
