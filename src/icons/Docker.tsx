import React from 'react';

interface IconProps {
	size?: number;
}

const Docker: React.FC<IconProps> = ({size = 24}) => {
	return (
		<span className='i-icon'>
			<svg xmlns="http://www.w3.org/2000/svg"  viewBox={'0 0 24 24'} width={size} height={size} fill="none">
				<path fill="currentColor" d="M 10.644531 3.5 L 10.644531 5.8027344 L 13.121094 5.8027344 L 13.121094 3.5 L 10.644531 3.5 z M 4.7871094 6.2578125 L 4.7871094 8.5371094 L 7.265625 8.5371094 L 7.265625 6.2578125 L 4.7871094 6.2578125 z M 7.7167969 6.2578125 L 7.7167969 8.5371094 L 10.193359 8.5371094 L 10.193359 6.2578125 L 7.7167969 6.2578125 z M 10.644531 6.2578125 L 10.644531 8.5371094 L 13.121094 8.5371094 L 13.121094 6.2578125 L 10.644531 6.2578125 z M 18.695312 6.9628906 L 18.345703 7.4941406 C 17.655703 8.5491406 17.468031 10.285641 18.207031 11.431641 C 17.881031 11.609641 17.240578 11.852891 16.392578 11.837891 L 0.09375 11.837891 C -0.23225 13.764891 0.3101875 16.269281 1.7421875 17.988281 C 3.1321875 19.654281 5.2173594 20.5 7.9433594 20.5 C 13.845359 20.5 18.213813 17.750906 20.257812 12.753906 C 21.059812 12.768906 22.792641 12.756109 23.681641 11.037109 C 23.737641 10.942109 23.929 10.536672 24 10.388672 L 23.501953 10.050781 L 23.501953 10.052734 C 22.961953 9.6847344 21.717719 9.5504219 20.761719 9.7324219 C 20.637719 8.8214219 20.135703 8.0294062 19.220703 7.3164062 L 18.695312 6.9628906 z M 1.8613281 8.9941406 L 1.8613281 11.246094 L 4.3398438 11.246094 L 4.3398438 8.9941406 L 4.3378906 8.9941406 L 1.8613281 8.9941406 z M 4.7871094 8.9941406 L 4.7871094 11.246094 L 7.265625 11.246094 L 7.265625 8.9941406 L 4.7871094 8.9941406 z M 7.7167969 8.9941406 L 7.7167969 11.246094 L 10.193359 11.246094 L 10.193359 8.9941406 L 7.7167969 8.9941406 z M 13.576172 8.9941406 L 13.576172 11.246094 L 16.054688 11.246094 L 16.054688 8.9941406 L 13.576172 8.9941406 z M 10.644531 8.9980469 L 10.644531 11.251953 L 13.121094 11.251953 L 13.121094 8.9980469 L 10.644531 8.9980469 z" />
			</svg>
		</span>
	);
}

export default Docker;
