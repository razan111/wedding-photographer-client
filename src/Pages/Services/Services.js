import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import './Services.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    const pages = Math.ceil(count/size)
    useEffect(() => {
        const url = `https://wedding-photographer-server-woad.vercel.app/services?page=${page}&size=${size}`;
        console.log(page, size);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setServices(data.services);
            })
    }, [page, size])
    return (
       <>
       <h2 className='my-6 text-5xl font-bold text-center'>This is our Service</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}

                


                ></ServiceCard>)

                
            }
        </div>

        <div className='paigination text-center my-5'>
            {
                [...Array(pages).keys()].map(number => <button
                key={number}
                className={page === number && 'selected'}
                onClick={() => setPage(number)}
                
                >
                    {number}
                </button>)
            }
            <select onChange={event => setSize(event.target.value)}>
                <option value="3">3</option>
                <option value="6" selected>6</option>
                <option value="10">10</option>
            </select>
        </div>
       </>
    );
};

export default Services;