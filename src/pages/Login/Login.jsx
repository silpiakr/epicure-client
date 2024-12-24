import Lottie from 'lottie-react';
import React from 'react';
import singupAnimation from '../../assets/lottie/signup.json'
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password};

        console.log(user);

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={singupAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className=" text-center mt-5 text-4xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='ml-6 mb-6'>Not Have An Account? <Link to='/signup' className='text-blue-600 font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;