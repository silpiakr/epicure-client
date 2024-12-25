import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import logo from '../../assets/images/epicure-logo.png'
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
             //   console.log('Sign out successfully');
            })
            .catch(error => {
              //  console.log('ERROR', error.message);
            })
    }

    const links = <>
        <li><Link className='mr-5 font-semibold text-gray-600' to='/'>Home</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex flex-row items-center'>
                    <img src={logo} className='w-12' alt="" />
                    <a className="pl-3 text-lg md:text-3xl text-nowrap font-bold">Career Counseling</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className='flex items-center gap-3'>
                        <div className='relative group'>
                            <Link to='/profile'>
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt="user" className='w-8 h-8 rounded-full cursor-pointer' />
                                ) : (

                                    <FaRegCircleUser className='text-3xl text-gray-700 cursor-pointer' />

                                )}
                                <MdOutlineEdit className='absulate z-10 ml-6 -mt-3' />
                            </Link>
                            <div className='absolute left-0 mt-2 w-40 bg-white text-gray-600 text-sm rounded-lg p-2 hidden group-hover:block'>
                                {user.displayName || 'User'}
                            </div>
                        </div>
                        <button onClick={handleSignOut} className='btn btn-sm'>Sign Out</button>
                    </div>
                ) : (
                    <Link to='/login' className='btn bg-base-200'>Login</Link>
                )
                }
            </div>
        </div>
    );
};

export default Navbar;