import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import Icon from '@icon-park/react/es/all';

const Header = () => {
	return (
		<header className={'header'}>
			<nav>
				<NavLink
					to={'/'}
					className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }
					data-tooltip-id="tooltip-area"
					data-tooltip-content="Home"
					data-tooltip-place="right"
				>
					<Icon type={'Home'} theme={'outline'} size={24} />
				</NavLink>
				<NavLink
					to={'/skills'}
					className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }
					data-tooltip-id="tooltip-area"
					data-tooltip-content="Skills"
					data-tooltip-place="right"
				>
					<Icon type={'Star'} theme={'outline'} size={24} />
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
