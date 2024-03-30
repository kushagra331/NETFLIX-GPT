import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = ({inout}) => {
  const [isLoginshow,setIsLoginShow]=useState(true)

  const handleshow=()=>{
    setIsLoginShow(!isLoginshow)
  }
  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="" srcset="" />
        </div>
        <form className='w-3/12 bg-black absolute p-12 mx-auto h-fit mt-20 right-8 left-8 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isLoginshow? 'Sign In' : 'Sign Up'}</h1>
          {!isLoginshow && 
          <input type="text" className='p-2 my-2 w-full bg-gray-700' placeholder='Full Name' />
          }
          <input type="email" className='p-2 my-2 w-full bg-gray-700' placeholder='Email id' />
          <input type="password" className='p-2 my-2 w-full bg-gray-700' placeholder='Password' />
          <button type="button" className='p-2 my-2 bg-red-700 w-full rounded-lg' placeholder=''>{ isLoginshow ? 'Sign In' : 'Sign Up'}</button>
          {isLoginshow && <div className="text-center"> 
            <span className='w-2'>OR</span>
          </div>}
          {isLoginshow && 
          <button type="button" className='p-2 my-4 bg-slate-400/50 w-full' placeholder=''>Use a sign-in code</button>
          }
          {isLoginshow && <div className="text-center"> 
            <span className=''>Forgot password?</span>
          </div>}
          {isLoginshow && <div className='m-2'>
            <input type="checkbox" name="" id="" />
             <span>Remember me </span>
          </div>}
          <span className='m-2 py-2 cursor-pointer' onClick={handleshow} >
            {isLoginshow ? 'New to Netfli? Sign up now ' : 'Already user, Sign In'}
            </span>
          <div className='m-2 text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</div>
        </form>
    </div>
  )
}

export default Login
