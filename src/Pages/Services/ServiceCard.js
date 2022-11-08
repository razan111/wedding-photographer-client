import React from 'react';
import { AiFillStar , AiFillEye} from 'react-icons/ai';


const ServiceCard = ({ service }) => {
    const { title, img, details, price, ratting, view } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-56 w-full object-cover' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>

                <div className='flex justify-between'>
                    <div className='flex align-middle text-xl'>
                        <AiFillStar className='mt-1'/>
                        <span>{ratting}</span>
                    </div>

                    <div className='flex text-xl '>
                        <AiFillEye className='mt-1'/>
                        <span>{view}</span>
                    </div>
                </div>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;