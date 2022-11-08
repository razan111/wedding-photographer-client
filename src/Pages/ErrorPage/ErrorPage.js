import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Image/Error/error.jpg'
const ErrorPage = () => {
    return (
        <div>
            <img src={error} alt="" />
            <h2 className='text-4xl text-center'>Page Not Found</h2>
            <div className='flex justify-center my-5'>
            <Link to='/'  className='btn btn-ghost text-xl'>Go to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;