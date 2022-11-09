import React from 'react';
import './CaruselItems.css'

const CaruselItem = ({slide}) => {
    const {image, id, next, prev} = slide
    return (
        <div style={{height: '70vh'}} id={`slide${id}`} className="carousel-item relative w-full">
                <div className='img-gradient w-full'>
                 <img style={{height: '70vh'}}  src={image} alt="" className="w-full object-cover" />
                </div>
                
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 md:left-24 left-2 top-1/4">
                    <h1 className='font-bold md:text-5xl text-3xl italic text-white'>The Complete Guide <br />
                    to Wedding <br />
                    Photography   
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 md:left-24 left-2 md:w-2/5 w-full top-1/2">
                    <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 md:left-24 left-2 top-3/4">
                <button className="btn btn-outline btn-warning">Subscribe</button>
                </div>
            </div>
    );
};

export default CaruselItem;