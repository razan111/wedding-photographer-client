import React, { useEffect, useState } from 'react';

const ReviewMeDetails = ({re, handleDelete}) => {
    const {name, email, message, ratting, services,review, _id} = re

    const [reviewService, setReviewService] = useState({})

    

   

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
                
            </td>
            <td>{ratting}</td>
            
        </tr>
    );
};

export default ReviewMeDetails;