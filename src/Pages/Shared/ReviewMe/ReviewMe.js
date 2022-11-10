import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewMeDetails from './ReviewMeDetails';

const ReviewMe = () => {
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you want to delete comment')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining = review.filter(dRev => dRev._id !== id)
                    setReview(remaining)
                }
            })
        }
    }

    return (
        <div>
            <p>{review.length}</p>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(re => <ReviewMeDetails
                            key={re._id}
                            re={re}
                            handleDelete={handleDelete}
                            ></ReviewMeDetails>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ReviewMe;