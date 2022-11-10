import React, { useEffect, useState } from 'react';

const ReviewMeDetails = ({re, handleDelete}) => {
    const {name, email, message, ratting, services,review, _id} = re

    const [reviewService, setReviewService] = useState({})

    // useEffect(() =>{
    //     fetch(`http://localhost:5000/reviews/${review}`)
    //     .then(res => res.json())
    //     .then(data => setReviewService(data))
    // },[review])


   

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                           {
                            reviewService?.img &&
                             <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                           }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    {message}
                </div>
                {/* Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ReviewMeDetails;