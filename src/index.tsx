import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Error from './pages/error';
import Layout from './pages/layout';
import Skills from './pages/skills';
import reportWebVitals from './reportWebVitals';
import AnimatedCursor from 'react-animated-cursor';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import '@icon-park/react/styles/index.css';
import './index.css';
import './i18n';
import { Provider } from 'react-redux';
import { store } from '@/store';

const router = createBrowserRouter([
	{
		element: <Layout/>,
		children: [
			{
				path: "/",
				element: <Navigate to="/en" replace />,
			},
			{
				path: '/:lng',
				element: <Home/>,
				errorElement: <Error/>,
			},
			{
				path: '/:lng/skills',
				element: <Skills/>,
				errorElement: <Error/>,
			},
		],
	},
	{
		path: '/error',
		element: <Error/>,
		errorElement: <Error/>,
	},
	{
		path: '*',
		element: <Error/>,
		errorElement: <Error/>,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router}/>
			<AnimatedCursor/>
			<Tooltip id="tooltip-area"/>
		</React.StrictMode>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
