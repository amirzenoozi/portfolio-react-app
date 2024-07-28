import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import Icon from '@icon-park/react/es/all';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Header = () => {
	const currentLanguage = useSelector((state: RootState) => state.uiSettings.currentLanguage);

	return (
		<header className={'header'}>
			<nav>
				<NavLink
					end={true}
					to={`/${currentLanguage}`}
					className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }
					data-tooltip-id="tooltip-area"
					data-tooltip-content="Home"
					data-tooltip-place="right"
				>
					<Icon type={'Home'} theme={'outline'} size={24} />
				</NavLink>
				<NavLink
					end={true}
					to={`/${currentLanguage}/skills`}
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
