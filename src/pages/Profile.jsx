import React, { use } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { setLogLevel } from 'firebase/app';

const Profile = () => {
    const {user, updateUser, setUser, setLoading} = use(AuthContext);
    const handleUpdateInfo= e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        updateUser({displayName: name, photoURL : url})
            .then(()=>{
                setUser(user);
                setLoading(false);
            }
            )
            .catch()
            
    }
    
    return (
        <div className='py-4 px-2 sm:p-10 bg-base-100 my-8 rounded-2xl flex sm:justify-between flex-col sm:flex-row'>
            <div className='text-center w-full sm:w-5/12 mx-auto my-auto'>
                <img src={user.photoURL} alt="upload profile" className='rounded-full h-30 w-30 sm:h-50 sm:w-50 mx-auto border border-[#87CEEE]'/>
                <h2 className='font-bold text-2xl text-[#87CEEE] mt-2'>{user?.displayName}</h2>
                <h2 className='font-semibold text-xl text-[#87CEEE]'>{user.email}</h2>
            </div>
            <div className='w-full sm:w-5/12 my-auto border p-4 rounded-2xl border-[#87CEEE] mt-5 sm:mt-0'>
                <form onSubmit={handleUpdateInfo} className='flex flex-col gap-2'>
                    <label className="label font-semibold">New name</label>
                    <input type="text" className="input rounded-xl w-full" placeholder="New Name"  name='name' required/>
                    <label className="label font-semibold">New profile picture</label>
                    <input type="text" className="input rounded-xl w-full" placeholder="Photo Url" name='url' required/>
                    <button type='submit' className="btn mt-4 bg-[#87CEEE] font-bold text-white text-xl">Update Profile</button>
                </form>
            </div>
        </div>
    );           
};

export default Profile;