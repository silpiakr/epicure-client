import React from 'react';
import { BiSolidError } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate('/')
    }
    return (
        <div className='flex flex-col items-center mt-40'>
            <BiSolidError className='text-8xl text-red-600 my-6' />
            <h2 className='text-5xl font-bold text-center'>Page Not found</h2>
            <p className='text-center mt-5'>Status: 404</p>
            <button onClick={handleBackToHome} className='btn bg-green-400 text-black font-bold mt-6'>Back to Home</button>
        </div>
    );
};

export default ErrorPage;