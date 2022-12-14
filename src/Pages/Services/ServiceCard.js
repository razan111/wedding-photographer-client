import React, { useState } from 'react';
import { AiFillStar , AiFillEye} from 'react-icons/ai';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useNavigate } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const { _id, title, img, details, price, ratting, view } = service;
 

    const [isReadMore, setIsReadMore] = useState(false)

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
            <PhotoView src={img}>
            <figure><img className='h-56 w-full object-cover' src={img} alt="Shoes" /></figure>
            </PhotoView>
            </PhotoProvider>
            
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                   {isReadMore ? details : details.substr(0,100)+ '...'}
                   <Link to={`/services/${_id}`}><button className='ml-2 p-1 border border-1'>Read More</button></Link>

                </p>
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
                   
                    <Link to={`/services/${_id}`}>
                    <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;