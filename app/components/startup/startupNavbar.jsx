import React from 'react'
import Link from 'next/link'
import {SignOutButton } from '@clerk/nextjs';
import { PiSignOutBold } from "react-icons/pi";

const StartupNavbar = () => {
  return (
    <div className="navbar bg-base-100 p-2 m-2 flex w-full items-center">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Startup Dashboard</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            View Profile
          </div>
          <ul tabIndex={0} className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link target='_blank' href="/profile">
                General Profile
              </Link>
            </li>
            <li><Link href="/ediitStudentProfile">Edit Startupt Profile</Link></li>
            <li>
              <SignOutButton>
                <Link href="/">
                  <p className='pr-1'>log Out</p>
                  <PiSignOutBold />
                </Link>
              </SignOutButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StartupNavbar