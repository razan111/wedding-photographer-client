import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="hero py-12 my-12 bg-slate-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-start">
                    <h2 className='text-4xl font-bold text-green-600'>Welcome Back!</h2>
                    <p className="">To keep connected with us please signup with your personal info</p>
                </div>
                <div className="card  w-full  md:py-16 sm:py-6 shadow-2xl bg-base-200">
                    <div className="card-body">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="form-control md:w-3/4 w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-3/4 w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6 w-1/4 mx-auto">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>Not Registered? <Link to='/signup'><span className='underline text-blue-500'>Create an Account</span></Link></p>

                            {/* social icon  */}
                        <div className='flex justify-center text-3xl'>
                       <FaGoogle className='mr-3'/>
                        <FaGithub/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;