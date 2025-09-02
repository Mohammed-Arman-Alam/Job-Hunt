import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../authProvider/AuthProvider';
import { auth } from '../firebase/firebase.config';

const RegisterPage = () => {
    const {createUser,  updateUser} = use(AuthContext);
    const [errorMessage, setErroMessage]= useState("");
    const handleRegister =e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result=>{
            updateUser({displayName: name, photoURL : url})
            .then()
            .catch()
        })
        .catch(error=>{
            setErroMessage(error.message);
        });
    }
    return (
        <div className="hero bg-base-100 my-8 rounded-2xl py-12 px-8">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                <h1 className="text-5xl font-bold">Welcome to  <span className='text-[#87CEEF] font-bold'>JobHunt</span></h1>
                <p className="py-5 w-10/12 text-[#00000060]">
                    Looking For a job? Without wasting time register and start looking for job matching your skill & ability. 
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body bg-[#87CEEB20] rounded-xl">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label font-semibold">Name</label>
                        <input type="text" className="input rounded-xl" placeholder="Name"  name='name' />
                        <label className="label font-semibold">Profile Picture</label>
                        <input type="text" className="input rounded-xl" placeholder="Photo Url" name='url' />
                        <label className="label font-semibold">Email</label>
                        <input type="email" className="input rounded-xl" placeholder="Email" name='email' required/>
                        <label className="label font-semibold">Password</label>
                        <input type="password" className="input rounded-xl" placeholder="Password" name='password' required/>
                        <button type='submit' className="btn mt-4 bg-[#87CEEE] font-bold text-white text-xl">Register</button>
                    </form>
                    <p className='text-center'>Already have an account? Please <Link to="/Login" className='text-[#77CEFF] font-bold'>login</Link></p>
                    <>
                        {
                            (errorMessage =="Firebase: Error (auth/email-already-in-use).") && 
                            <p>Email already in use please <Link to="/Login" className='text-[#77CEFF] font-bold'>login</Link> or use other email.</p>
                        }
                    </>
                </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;