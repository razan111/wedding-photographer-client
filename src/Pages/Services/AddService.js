import React, { useState } from 'react';

const AddService = () => {

    const [user, setUser] = useState({})
    

    const handleAddUser = (event) => {
        event.preventDefault()


        fetch('https://wedding-photographer-server-woad.vercel.app/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Successfully added service...")
                
            })
            
    }
    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser)
        value.reset()

    }


    return (
        <div>
            <div className="hero py-12 bg-base-200">
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleAddUser} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Add Service</h1>
                        <div className="form-control">
                            {/* name  */}
                            <input onBlur={handleInputBlur} type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            {/* title  */}
                            <input onBlur={handleInputBlur} type="text" name='title' placeholder="Service Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input onBlur={handleInputBlur} type="text" name='img' placeholder="Image Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input onBlur={handleInputBlur} type="text" name='price' placeholder="Service Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input onBlur={handleInputBlur} type="text" name='ratting' placeholder="Ratting" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input onBlur={handleInputBlur} type="text" name='view' placeholder="View" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input onBlur={handleInputBlur} type="text" name='details' placeholder="Service Details" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button onBlur={handleInputBlur} className="btn btn-primary">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;