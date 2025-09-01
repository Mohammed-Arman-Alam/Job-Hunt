import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../authProvider/AuthProvider';

const Navbar = () => {
    const {user} = use(AuthContext);
    const link =
    <>
        <NavLink>Home</NavLink>
        <NavLink>Jobs</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm py-4 px-8 rounded-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {link}
                </ul>
                </div>
                <Link className="text-3xl font-bold text-[#87CEEF] ">JobHunt</Link>
            </div>
            <div className="navbar-center hidden lg:flex justify-between">
                <ul className="menu menu-horizontal px-1 flex gap-4">
                {link}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? 
                    (<>
                     <img src="" alt="" />
                     <Link className='btn rounded-xl bg-[#87CEEB] text-white font-semibold text-lg p-5'>Logout</Link>
                    </>) :
                    (<>
                        <Link to='/Register' className='btn rounded-xl bg-[#87CEEB] text-white font-semibold text-lg p-5'>Register</Link>
                        <Link to='/Login' className='btn rounded-xl bg-[#87CEEB] text-white font-semibold text-lg p-5'>Login</Link>
                    </>
                        
                    )
                }
                
            </div>
        </div>
    );
};

export default Navbar;