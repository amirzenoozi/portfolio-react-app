import React from 'react';
import { IconInterface } from './Icon.interface';

const VueJs: React.FC<IconInterface> = ({size = 24}) => {
	return (
		<span className='i-icon'>
			<svg xmlns="http://www.w3.org/2000/svg"  viewBox={'0 0 24 24'} width={size} height={size} fill="none">
				<path fill="currentColor" d="M1.026 23.567L1.025 23.559 1.024 23.556zM19.2 1.5L14.775 1.5 12 6.348 9.228 1.5 4.803 1.5 4.803 1.505 0 1.505 12 22.5 24 1.506 19.197 1.506z" />
			</svg>
		</span>
	);
}

export default VueJs;
