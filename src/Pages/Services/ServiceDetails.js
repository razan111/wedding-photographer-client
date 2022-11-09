import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { AiFillEye, AiFillStar } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const ServiceDetails = () => {
   


    const service = useLoaderData()
    const { _id, title, img, details, price, ratting, view, name } = service;
    return (
        <div className='my-12 grid grid-cols-1 md:grid-cols-2'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='h-96 w-full object-cover' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>

                    <div className='flex justify-between'>
                        <div className='flex align-middle text-xl'>
                            <AiFillStar className='mt-1' />
                            <span>{ratting}</span>
                        </div>

                        <div className='flex text-xl '>
                            <AiFillEye className='mt-1' />
                            <span>{view}</span>
                        </div>
                    </div>


                </div>
            </div>

            <div>
                <Review></Review>
            </div>
            
        </div>
    );
};

export default ServiceDetails;