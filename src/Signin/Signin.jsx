/*
import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginFailed,loginStart,loginSuccess } from '../Components/redux/userSlice';
const Signin = () => {
  const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const[email,setEmail]=useState("")
//const dispatch=useDispatch();
const navigate=useNavigate();
const handleLogin=async(e)=>{
e.preventDefault();
//dispatch(loginStart())
try{
  const res=await axios.post('/auth/signin',{
    username,password
  }) 
  //dispatch(loginSuccess(res.data))
  console.log("res",res.data)
  navigate("/");
}catch(err){
  //dispatch(loginFailed())
console.log(err)
}
}
const handleSignup=async(e)=>{
e.preventDefault();
try{
  const res=await axios.post('/auth/signup',{
    username,
    email,
    password 
  })
  console.log(res.data)
  navigate('/')
}catch(err){
 console.log(err)
}
}
  return (
    <div>
    <form  className='bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 and md:w-6/12 mx-auto gap-10'>
     <h2 className='text-3xl font-bold text-center'>Sign in to twitter</h2>
    <input onChange={(e)=>setUsername(e.target.value)}
    type='text' placeholder="username" className='text-xl py-2 rounded-full px-4'/>
    <input onChange={(e)=>setPassword(e.target.value)}
    type='password' placeholder="password" className='text-xl py-2 rounded-full px-4'/>
   <button onClick={handleLogin}
   className='text-xl py-2 rounded-full px-4 bg-blue-500 text-white'>Signin</button>
   <p className='text-center text-xl'>Don't have an account</p>
   <input onChange={(e)=>setUsername(e.target.value)}
   type='text' placeholder="username" className='text-xl py-2 rounded-full px-4'/>
   <input type='email' onChange={(e)=>setEmail(e.target.value)}
   placeholder="email" required className='text-xl py-2 rounded-full px-4'/>
    <input type='password' onChange={(e)=>setUsername(e.target.value)}
     placeholder="password" className='text-xl py-2 rounded-full px-4'/>
    <button onClick={handleSignup}
     className='text-xl py-2 rounded-full px-4 bg-blue-500 text-white'>Signup</button>
    </form>
    </div>
  )
}

export default Signin
*/
import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailed } from "../Components/redux/userSlice";

import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { username, password });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailed());
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const res = await axios.post("/auth/signup", {
        username,
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailed());
    }
  };

  return (
    <form className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
      <h2 className="text-3xl font-bold text-center">Sign in to Twitter</h2>

      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        className="text-xl py-2 rounded-full px-4"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
        className="text-xl py-2 rounded-full px-4"
      />

      <button
        className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
        onClick={handleLogin}
      >
        Sign in
      </button>

      <p className="text-center text-xl">Don't have an account?</p>

      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        className="text-xl py-2 rounded-full px-4"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
        required
        className="text-xl py-2 rounded-full px-4"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
        className="text-xl py-2 rounded-full px-4"
      />

      <button
        onClick={handleSignup}
        className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
};

export default Signin;
