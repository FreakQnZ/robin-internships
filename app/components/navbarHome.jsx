import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {SignOutButton, UserButton, currentUser  } from '@clerk/nextjs';
import { PiSignOutBold } from "react-icons/pi";

const Navbar = async () => {
    const user = await currentUser();
    const uId = user?.id;

    async function checkUserExists() {
        const res = await fetch(`${process.env.API_HOST}/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: uId }),
        }, { cache: 'no-store' });
        return res.json();
      }

      const isUserVerified = await checkUserExists()

  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <Link href="/StudentHomePage" className='hover:text-blue-300 cursor-pointer'>Student</Link>
          <Link href="/StartupHomePage" className='hover:text-blue-300 cursor-pointer'>Startup</Link>
          <Link href="" className='hover:text-blue-300 cursor-pointer'>College</Link>
          <Link href="" className='hover:text-blue-300 cursor-pointer'>About Us</Link>
          <Link href="" className='hover:text-blue-300 cursor-pointer'>Contact Us</Link>
        </ul>
      </div>
      <Link href = "/"><Image className = " rounded-xl" src = "/logo.jpeg" width={50} height={50} /></Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 lg:space-x-8 text-lg">
        <Link href="/StudentHomePage" className='hover:text-blue-300 cursor-pointer'>Student</Link>
        <Link href="/StartupHomePage" className='hover:text-blue-300 cursor-pointer'>Startup</Link>
        <Link href="" className='hover:text-blue-300 cursor-pointer'>College</Link>
        <Link href="" className='hover:text-blue-300 cursor-pointer'>About Us</Link>
        <Link href="" className='hover:text-blue-300 cursor-pointer'>Contact Us</Link>
      </ul>
    </div>
    <div className="navbar-end">
          {uId ? (
              isUserVerified !== null && (
              <div className="text-center">{isUserVerified?.success == true ? (
                      isUserVerified?.role == 'student' ? (
                  <div className='flex space-x-6 pr-6'>
                  <Link href="/studentDashboard" className="btn bg-transparent text-black hover:bg-blue-400 hover:text-white w-40 shadow-lg border-blue-500 border">Dashboard</Link>
                  <SignOutButton>
                  <Link href="/" className=' flex items-center p-2 text-error cursor-pointer btn'>
                    <p className='pr-1 hidden lg:block'>Sign Out</p>
                    <PiSignOutBold />
                  </Link>
                </SignOutButton>
              </div>
              ) : (
                  <div className='flex space-x-6 pr-6'>
                  <Link href="/startupDashboard" className="btn btn-success hover:text-white w-40 shadow-lg">Dashboard</Link>
                  <SignOutButton>
                  <Link href="/" className=' flex items-center p-2 text-error cursor-pointer btn'>
                    <p className='pr-1 hidden lg:block'>Sign Out</p>
                    <PiSignOutBold />
                  </Link>
                </SignOutButton>
              </div>
              )
  
            ):(
              <div className='flex space-x-6 pr-6'>
              <Link href="/register" className="btn bg-transparent text-black hover:bg-blue-400 hover:text-white w-40">Get started</Link>
               <SignOutButton>
                  <Link href="/" className=' flex items-center p-2 text-error cursor-pointer btn'>
                    <p className='pr-1 hidden lg:block'>Sign Out</p>
                    <PiSignOutBold />
                  </Link>
                </SignOutButton>
              </div>
            )}</div>
          )
  
          ) : (
              <>
              <Link href="/signin" className=" btn bg-blue-400 text-black hover:bg-blue-500 border-opacity-0 hover:text-white lg:w-40">Log In</Link>
              <Link href="/signup" className="btn ml-2 bg-transparent text-black hover:bg-blue-400 hover:text-white lg:w-40">Sign Up</Link>
              </>
          ) }
         </div>
  </div>
  );

};

export default Navbar
