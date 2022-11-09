import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const {_id, title} = service
    return (
        <div>
            <h1>Details {_id}</h1>
        </div>
    );
};

export default ServiceDetails;