import React from 'react';
import { IconInterface } from './Icon.interface';

const FastAPI: React.FC<IconInterface> = ({size = 24}) => {
	return (
		<span className='i-icon'>
			<svg xmlns="http://www.w3.org/2000/svg"  viewBox={'0 0 24 24'} width={size} height={size} fill="none">
				<path fill="currentColor" d="M12,1.25c5.933,0 10.75,4.817 10.75,10.75c-0,5.933 -4.817,10.75 -10.75,10.75c-5.933,0 -10.75,-4.817 -10.75,-10.75c0,-5.933 4.817,-10.75 10.75,-10.75Zm1.446,4.12c0.019,-0.155 -0.073,-0.303 -0.221,-0.353c-0.148,-0.05 -0.311,0.011 -0.39,0.146l-4.659,7.987c-0.059,0.102 -0.06,0.228 -0.001,0.33c0.058,0.102 0.167,0.165 0.285,0.165l2.717,0l-0.623,4.985c-0.019,0.155 0.073,0.303 0.221,0.353c0.148,0.05 0.311,-0.011 0.39,-0.146l4.659,-7.987c0.059,-0.102 0.06,-0.228 0.001,-0.33c-0.058,-0.102 -0.167,-0.165 -0.285,-0.165l-2.717,-0l0.623,-4.985Z" />
			</svg>
		</span>
	);
}

export default FastAPI;
