import React, { useEffect } from 'react';
import Header from '@/components/header';
import { setLanguage } from '@/store/uiSettings/uiSettingsSlice';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import './style.scss';
import i18n from 'i18next';

const Layout = () => {
	const { lng } = useParams<{ lng: string }>();
	const dispatch = useDispatch();
	const currentLanguage = useSelector((state: RootState) => state.uiSettings.currentLanguage);

	useEffect(() => {
		if (lng != null) {
			dispatch(setLanguage(lng));
			void i18n.changeLanguage(lng);
		}
	}, [lng, dispatch]);

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default Layout;
