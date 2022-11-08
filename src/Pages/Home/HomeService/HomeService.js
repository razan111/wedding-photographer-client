import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard';

const HomeService = () => {
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);

    useEffect(() => {
        const url = `http://localhost:5000/services?page=${page}&size=${size}`;
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
        </div>
        <div className='text-center'>
            <Link className='btn btn-outline my-5' to='/services'>Show More..</Link>
        </div>

       </>
    );
};

export default HomeService;