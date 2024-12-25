import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import { AiOutlineGoogle } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import Swal from 'sweetalert2';


const Login = () => {

    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const emailRef = useRef();

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
       console.log(email, password);

        signInUser(email, password)
        .then(result => {
           console.log(result.user);
           Swal.fire("Success", "Registration successful!", "success");
            e.target.reset();
            navigate('/');

            // toast('login successfully!');
        })
        .catch(error => {
           toast.error('ERROR', error.message);
            setLoginError(true);
        })

    }
    const googleSignIn = () => {
        signInWithGoogle()
        .then(result => {
           console.log(result.user);
            setSuccess(true);

            toast('Login with Google successfully!');
            navigate('/');
        })
        .catch(error => {
           console.log('ERROR', error.message);
            setLoginError(true);
        })
    }

    const handleForgetPassword = () => {
       console.log('get email for change password', emailRef.current.value);
        const email = emailRef.current.value;
        if(!email){
            toast.error('Invalid email');
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Password reset email sent, check your email');
            })
        }

        navigate(`/forgotPassword?email=${encodeURIComponent(email)}`);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
                <div className=" flex flex-col justify-center items-center card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Login Now!</h1>
                </div>
                    <form onSubmit={handleLogin} className="card-body w-full">
                        <div className="form-control">
                            <button onClick={googleSignIn} className='btn text-base'>
                                <AiOutlineGoogle className='text-2xl text-green-600' />
                                Login With Google
                            </button>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? 'text' : "password" } name='password' placeholder="password" className="input bg-base-200" required />
                            <a onClick={() => setShowPass(!showPass)} className='btn btn-xs absolute right-3 top-12'>
                                {
                                    showPass ? <FaRegEyeSlash /> : <FaRegEye />
                                } 
                            </a>
                            <label onClick={handleForgetPassword} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-teal-600 text-white">Login</button>
                        </div>
                    </form>
                    <p className='text-gray-600 font-semibold'>Don't Have An Account? <Link className='text-teal-700' to='/signup'>Sign Up</Link></p>
                </div>
        </div>
    );
};

export default Login;