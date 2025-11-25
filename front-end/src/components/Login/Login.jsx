import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setpassword] = useState("")
    //  login function 
    const API_URL= import.meta.env.VITE_API_URL;
    const handelLogin = async(e)=>{
                e.preventDefault()
                try {
                    const res = await axios.post(`${API_URL}/login`,{email,password},{withCredentials:true})
                    if (res?.data?.status===200) {
                        toast.success(res.data.message)
                        setEmail("");
                        setpassword('')
                        
                    } else{
                        toast.error(res.data.message || "unknown")
                    }
                } catch (error) {
                    toast.error(error?.response?.data?.message || "server error😒")
                }
        }
    return (
        <section className='bg-white p-10 rounded-2xl shadow-2xl md:p-20'>
            <div className='flex flex-col justify-center items-center space-y-3 
            '>
                <div>
                    <h2 className="text-2xl font-semibold text-blue-600 md:text-4xl  ">Login</h2>
                </div>
                <div>
                    <form action="" className='flex flex-col space-y-2' onSubmit={handelLogin}>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="" className=''>Email</label>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder='Enter Your Email' className='border rounded-[15px] border-gray-300 py-1 px-3 focus:outline-blue-700' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Password</label>
                            <input value={password} onChange={e=>setpassword(e.target.value)} type="password" required placeholder='Enter Your Password' className='border rounded-[15px] border-gray-300 py-1 px-3 focus:outline-blue-700' />
                        </div>
                        <div className='mt-5 flex w-full justify-center '>
                              <Button type='submit' variant="contained" sx={{paddingX:"60px"}}>Login</Button>
                        </div>
                    </form>
                </div>
                <div className='mt-3'>
                    <p className='text-sm '>I have no account please <span className='text-blue-700 underline'><Link to={`/singup`}>Sing Up</Link></span></p>
                </div>
                
            </div>
            {/*  tost message */}
         <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnHover
                draggable
              />
        </section>
    );
}

export default Login;
