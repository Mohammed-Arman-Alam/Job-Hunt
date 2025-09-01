import React from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
    const handleLogin =()=>{

    }
    return (
        <div className="hero bg-base-100 my-8 rounded-2xl py-12">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                <h1 className="text-5xl font-bold">Welcome back to <span className='text-[#87CEEF] font-bold'>JobHunt</span></h1>
                <p className="py-5 w-10/12 text-[#87CEEB]">
                    If you are a registered user then just login and start looking for your dream job. 
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body bg-[#87CEEB20] rounded-xl">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label font-semibold">Email</label>
                        <input type="email" className="input rounded-xl" placeholder="Email" />
                        <label className="label font-semibold">Password</label>
                        <input type="password" className="input rounded-xl" placeholder="Password" />
                        <p className='font-bold my-2'>Forget Password ?</p>
                        <button type='submit' className="btn mt-4 bg-[#87CEEE] font-bold text-white text-xl">Login</button>
                    </form>
                    <p className='text-center'>New to <span className='text-[#87CEEF] font-bold'>JobHunt</span>? Please <Link to="/Register" className='text-[#77CEFF] font-bold'>Register</Link>.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;