import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Registation = () => {

    const { createUser, googleProviderLogin, gitHubProviderLogIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                
            })
            .catch(error => console.error(error))
    }


    const handleGitHubSignIn = () =>{
        gitHubProviderLogIn(gitHubProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
            navigate(from, { replace: true })
            
        })
        .catch(error => console.error(error))
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, { replace: true })
        })
        .then(data => console.log(data))
        .catch(err => console.error(err))

    }


    return (
        <div className="hero py-12 my-12 bg-slate-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-start">
                    <h2 className='text-4xl font-bold text-green-600'>Welcome Back!</h2>
                    <p className="">To keep connected with us please signup with your personal info</p>
                </div>
                <div className="card  w-full  md:py-16 sm:py-6 shadow-2xl bg-base-200">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Registation</h1>
                        <div className="form-control md:w-3/4 w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-3/4 w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-3/4 w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control md:w-3/4 w-full mx-auto">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6 w-1/4 mx-auto">
                            <button type='submit' className="btn btn-primary">Registation</button>
                        </div>
                        <p className='text-center'>If you have an account <Link to='/login'><span className='underline text-blue-500'>LogIn?</span></Link></p>

                        {/* social icon  */}
                        <div className='flex justify-center text-3xl'>
                            <FaGoogle onClick={handleGoogleSignIn} className='mr-3' />
                            <FaGithub onClick={handleGitHubSignIn}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registation;