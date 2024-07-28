import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { ClassNames } from '@/modules/classNames';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Error = () => {
	const CN = new ClassNames('error');
    const currentLanguage = useSelector((state: RootState) => state.uiSettings.currentLanguage);

    return (
		<div className={CN.generate()}>
			<h1>Oops, Something Went Wrong!</h1>
			<p>Try refreshing the page or going back to the <Link to={`/${currentLanguage}`}>Home</Link> Page.</p>
		</div>
	);
}

export default Error;
