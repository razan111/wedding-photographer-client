import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const {signIn, googleProviderLogin, gitHubProviderLogIn} = useContext(AuthContext)
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

    const handleLogIn = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)

            const currentUser = {
                email: user.email
            }

            console.log(currentUser)

            //get jwt token
            fetch('http://localhost:5000/jwt', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('weddingToken', data.token)
                navigate(from, { replace: true })
            })


           
        })
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
                    <form onSubmit={handleLogIn} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="form-control md:w-3/4 w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-3/4 w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6 w-1/4 mx-auto">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>Not Registered? <Link to='/signup'><span className='underline text-blue-500'>Create an Account</span></Link></p>

                            {/* social icon  */}
                        <div className='flex justify-center text-3xl'>
                       <FaGoogle onClick={handleGoogleSignIn} className='mr-3'/>
                        <FaGithub onClick={handleGitHubSignIn}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;