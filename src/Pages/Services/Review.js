import React, { useState } from 'react';

const Review = () => {
    const [user, setUser] = useState({})

    const handleReview = (event) =>{
        event.preventDefault()
        event.target.reset()

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser)
    }

    return (
        <div>
             <div className="hero py-12">
                    <div className="card w-full max-w-md shadow-2xl bg-base-100">
                        <form onSubmit={handleReview} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Feedback</h1>
                            <div className="form-control">
                                {/* name  */}
                                <input onBlur={handleInputBlur} type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input onBlur={handleInputBlur} type="text" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input onBlur={handleInputBlur} type="text" name='ratting' placeholder="Ratting" className="input input-bordered" required />
                            </div>
                            <div className='form-control'>
                            <input onBlur={handleInputBlur} className="textarea textarea-primary" name='message' placeholder="message"></input>
                            </div>

                            <div className='text-center'>
                                <button className='btn btn-primary' type='submit'>Submit</button>
                            </div>



                        </form>
                    </div>
                </div>

                <div>
                    
                </div>
            
        </div>
    );
};

export default Review;