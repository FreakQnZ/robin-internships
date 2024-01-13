import React from 'react'
import {SignIn} from '@clerk/nextjs'
import NavbarHome from '@/app/components/navbarHome'

const Signin = () => {
  return (
    <div className=' flex flex-col items-center justify-between h-full'>
      <NavbarHome/>
      <div className='m-20'>
        <SignIn/>
      </div>
    </div>
  )
}

export default Signin