import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceReviewDetails from './ServiceReviewDetails';

const SeviceReview = () => {

    const reviews = useLoaderData()
    return (
        <div>
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
                            reviews.map(review => <ServiceReviewDetails key={review._id}
                                review={review}
                            ></ServiceReviewDetails>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default SeviceReview;