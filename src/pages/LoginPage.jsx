import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../authProvider/AuthProvider';

const LoginPage = () => {
    const {loginUser, forgetPassword} = use(AuthContext);
    const [errorMessage, setErroMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();
    const handleLogin =e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length<6){
            setErroMessage("Password must be at leat 6 digit");
            return;
        }
        loginUser(email, password)
        .then(result=>{
            navigate(`${location.state ? location.state : '/'}`);
        })
        .catch(error=>{
            setErroMessage(error.message);
        })
    }
    const handleForgetPassword =()=>{
        const email = emailRef.current.value;
        forgetPassword(email)
        .then(()=>{alert('Check your email & reset password')})
        .catch()

        }
    
    return (
        <div className="hero bg-base-100 my-8 rounded-2xl py-12">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                <h1 className="text-5xl font-bold text-center sm:text-start">Welcome back to <span className='text-[#87CEEF] font-bold'>JobHunt</span></h1>
                <p className="py-5 w-10/12 text-[#87CEEB80] hidden sm:inline-flex">
                    If you are a registered user then just login and start looking for your dream job. 
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body bg-[#87CEEB20] rounded-xl">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label font-semibold">Email</label>
                        <input type="email" className="input rounded-xl" placeholder="Email" name='email' ref={emailRef} required/>
                        <label className="label font-semibold">Password</label>
                        <input type="password" className="input rounded-xl" placeholder="Password" name='password' required/>
                        <button onClick={handleForgetPassword} className='font-extrabold my-2'>Forget Password ?</button>
                        <button type='submit' className="btn mt-4 bg-[#87CEEE] font-bold text-white text-xl">Login</button>
                        {
                            (errorMessage) && <p className='text-center text-red-500 font-semibold text-sm'>{errorMessage}</p>
                        }
                    </form>
                    <p className='text-center'>New to <span className='text-[#87CEEF] font-bold'>JobHunt</span>? Please <Link to="/Register" className='text-[#77CEFF] font-bold'>Register</Link>.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;