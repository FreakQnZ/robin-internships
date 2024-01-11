"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import { PiSignOutBold } from "react-icons/pi";

const NavbarHome = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const uId = user?.id;

  const [isUserVerified, setIsUserVerified] = useState(null); // Track verification status

  async function checkUserExists() {
    const res = await fetch(`http://localhost:3000/api/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: uId }),
    })
    setIsUserVerified(await res.json());
  }

  useEffect(() => {
    checkUserExists();
  }, [uId]); 

  return (
    <div className="flex lg:justify-between p-2 items-center w-full">

      <div className=" absolute left-1/2 translate-x-[-50%] text-black font-bold m-2">
      <span className=' lg:text-6xl text-4xl'>
        <span className=' text-red-500'>R</span>ob<span className=' text-yellow-400'>in</span>
      </span>
      <span className=' font-bold lg:text-5xl text-xl'> internships</span>
    </div>

      <div className="hidden lg:block space-x-8 m-2">
        <Link href="/about" className="btn">About US</Link>
        <Link href="/contact" className="btn">Contact</Link>
      </div>

      {isSignedIn? (
        isUserVerified !== null && (
          <div className="text-center">{isUserVerified?.success ? (
            <div className="hidden lg:flex items-center space-x-8 m-2">
              <Link href="/dashboard" className="btn">DashBoard</Link>
              <SignOutButton>
                <div className=' flex items-center p-2 bg-error-content text-error cursor-pointer btn'>
                  <p className='pr-1'>Sign Out</p>
                  <PiSignOutBold />
                </div>
              </SignOutButton>
              <UserButton /> 
            </div>
            
          ) : (
            <div className="hidden lg:flex items-center space-x-8 m-2">
              <Link href="/register" className="btn">Get started</Link>
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
