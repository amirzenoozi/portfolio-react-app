import React from 'react';
import { IconInterface } from './Icon.interface';

const MongoDB: React.FC<IconInterface> = ({size = 24}) => {
	return (
		<span className='i-icon'>
			<svg xmlns="http://www.w3.org/2000/svg"  viewBox={'0 0 24 24'} width={size} height={size} fill="none">
				<path fill="currentColor" d="M0,0.001c2.785,9.787,2.518,14.372,7.35,18.203c4.822,3.83,9.397,2.207,11.486,1.982L22.607,24H24l-4.334-4.377	C19.639,16.998,25.586,0,0,0V0.001z M4.27,2.464H4.269c4.457,2.117,6.026,5.255,7.725,8.47c1.222,2.314,3.365,5.839,4.875,6.975	c1.511,1.125,3.161,1.955-0.321,0.455c-3.493-1.501-6.037-5.759-7.725-8.984c-1.296-2.474-2.41-4.751-4.832-6.423	C3.991,2.956,1.607,1.205,4.27,2.464z" />
			</svg>
		</span>
	);
}

export default MongoDB;
