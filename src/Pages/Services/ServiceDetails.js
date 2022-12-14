import userEvent from '@testing-library/user-event';
import React, { children, useState } from 'react';
import { AiFillEye, AiFillStar } from 'react-icons/ai';
import { Outlet, useLoaderData } from 'react-router-dom';
import Review from './Review';
import SeviceReview from './SeviceReview';

const ServiceDetails = () => {



    const service = useLoaderData()
    const { _id, title, img, details, price, ratting, view, name } = service;
    return (

        <div className='my-12 '>
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
                {/* <Outlet></Outlet> */}
                <Review></Review>



            </div>


        </div>
    );
};

export default ServiceDetails;