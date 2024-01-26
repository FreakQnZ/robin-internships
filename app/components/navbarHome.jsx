import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {SignOutButton, UserButton, currentUser  } from '@clerk/nextjs';
import { PiSignOutBold } from "react-icons/pi";

const Navbar = async () => {
    const user = await currentUser();
    const uId = user?.id;

    async function checkUserExists() {
        const res = await fetch(`http://localhost:3000/api/verify`, {
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
    <div className="flex text-black bg-white justify-between">
        <div className="pl-6 p-2">
            <Link href = "/LandingPage"><Image className = " rounded-xl" src = "/logo.jpeg" width={50} height={50} /></Link>
        </div>
        <div className="flex gap-12 pt-5 pr-72 mr-10 ">
            <Link href="/StudentHomePage" className='hover:text-blue-300 cursor-pointer'>Student</Link>
            <Link href="/StartupHomePage" className='hover:text-blue-300 cursor-pointer'>Startup</Link>
            <Link href="" className='hover:text-blue-300 cursor-pointer'>College</Link>
            <Link href="" className='hover:text-blue-300 cursor-pointer'>About Us</Link>
            <Link href="" className='hover:text-blue-300 cursor-pointer'>Contact Us</Link>
        </div>
        <div className="flex gap-10 p-2 pr-4">
        {uId ? (
            isUserVerified !== null && (
            <div className="text-center">{isUserVerified?.success == true ? (
                    isUserVerified?.role == 'student' ? (
                <div className='flex space-x-6 pr-6'>
                <Link href="/studentDashboard" className="btn bg-transparent text-black hover:bg-blue-400 hover:text-white w-40">Dashboard</Link>
                <SignOutButton>
                <Link href="/" className=' flex items-center p-2 text-error cursor-pointer btn'>
                  <p className='pr-1'>Sign Out</p>
                  <PiSignOutBold />
                </Link>
              </SignOutButton>
            </div>
            ) : (
                <div className='flex space-x-6 pr-6'>
                <Link href="/startupDashboard" className="btn btn btn-success hover:text-white w-40">Dashboard</Link>
                <SignOutButton>
                <Link href="/" className=' flex items-center p-2 text-error cursor-pointer btn'>
                  <p className='pr-1'>Sign Out</p>
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
                  <p className='pr-1'>Sign Out</p>
                  <PiSignOutBold />
                </Link>
              </SignOutButton>
            </div>
          )}</div>
        )

        ) : (
            <>
            <Link href="/signin" className="btn bg-transparent text-black hover:bg-blue-400 hover:text-white w-40">Log In</Link>
            <Link href="/signup" className="btn bg-blue-400 text-black hover:bg-blue-500 border-opacity-0 hover:text-white w-40">Sign Up</Link>
            </>
        ) }
       </div>
    </div>
  );

};

export default Navbar