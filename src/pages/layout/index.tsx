import React from 'react';
import Header from '../../components/header';
import { Outlet } from 'react-router-dom';
import './style.scss';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default Layout;
