import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
        <h1>Oops, Something Went Wrong!</h1>
        <p>Try refreshing the page or going back to the <Link to={'/'}>Home</Link> Page.</p>
    </div>
  );
}

export default Error;
