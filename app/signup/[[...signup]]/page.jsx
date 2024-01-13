import React from 'react'
import {SignUp} from '@clerk/nextjs'
import NavbarHome from '@/app/components/navbarHome'

const Signup = () => {
  return (
    <div className=' flex flex-col items-center justify-between h-full'>
      <NavbarHome/>
      <div className='m-20'>
        <SignUp/>
      </div>
    </div>
  )
}

export default Signup