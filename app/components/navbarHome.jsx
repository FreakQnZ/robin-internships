import React from 'react';
import Link from 'next/link';
import {SignOutButton, UserButton, auth } from '@clerk/nextjs';
import { PiSignOutBold } from "react-icons/pi";

const NavbarHome = async  () => {
  const {userId} = auth();
  const uId = userId;


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
    <div className="flex lg:justify-between p-2 items-center w-full">

      <Link href="/" className=" absolute left-1/2 translate-x-[-50%] text-black font-bold m-2">
        <span className=' lg:text-6xl text-4xl'>
          <span className=' text-red-500'>R</span>ob<span className=' text-yellow-400'>in</span>
        </span>
        <span className=' font-bold lg:text-5xl text-xl'> internships</span>
      </Link>

      <div className="hidden lg:block space-x-8 m-2">
        <Link href="/about" className="btn">About US</Link>
        <Link href="/contact" className="btn">Contact</Link>
      </div>

      {uId? (
        isUserVerified !== null && (
          <div className="text-center">{isUserVerified?.success == true ? (
            isUserVerified?.role == 'student' ? (
              <div className="hidden lg:flex items-center space-x-8 m-2">
              <Link href="/studentDashboard" className="btn">DashBoard</Link>
              <SignOutButton>
                <Link href="/" className=' flex items-center p-2 text-error cursor-pointer btn'>
                  <p className='pr-1'>Sign Out</p>
                  <PiSignOutBold />
                </Link>
              </SignOutButton>
              <UserButton /> 
            </div>
            ) : (
              <div className="hidden lg:flex items-center space-x-8 m-2">
              <Link href="/startupDashboard" className="btn">DashBoard</Link>
              <SignOutButton>
                <Link href="/" className=' flex items-center p-2 text-error cursor-pointer btn'>
                  <p className='pr-1'>Sign Out</p>
                  <PiSignOutBold />
                </Link>
              </SignOutButton>
              <UserButton /> 
              </div>
            )
            
          ) : (
            <div className="hidden lg:flex items-center space-x-8 m-2">
              <Link href="/register" className="btn btn-success">Get started</Link>
              <SignOutButton>
                <Link href="/" className=' flex items-center p-2 text-error cursor-pointer btn'>
                  <p className='pr-1'>Sign Out</p>
                  <PiSignOutBold />
                </Link>
              </SignOutButton>
              <UserButton /> 
            </div>
          )}</div>
        )
      ) : 
      (
        <div className="hidden lg:block space-x-8 m-2">
          <Link href="/signup" className="btn">Register</Link>
          <Link href="/signin" className="btn">Login</Link>
        </div>
      )}
{/* 
      {isUserVerified !== null && (
        <div className="text-center">{isUserVerified ? 'User exists' : 'Proceed with onboarding'}</div>
      )} */}
    </div>
  );
};

export default NavbarHome;
