import React from 'react'
import {SignUp} from '@clerk/nextjs'
import Image from 'next/image'
import logo from '../../utils/assets/Image.png'
import Link from 'next/link'

const Signup = () => {
  return (
    <div className=' flex flex-col items-center h-dvh'>
      <div className=' flex w-full h-full'>
        <div className=' w-1/2 bg-blue-200 flex flex-col justify-center items-center'>
          <Link href="/"><Image src={logo} width={500} height={500} /></Link>
          <p className=' text-center font-bold text-3xl'>Welcome to robin <br /> Internships!</p>
          <br />
          <p className=' text-center font-medium'>Discover exciting internship opportunities and <br /> kick start your career</p>
        </div>
        <div className=' w-1/2 flex justify-center items-center shadow-none'><SignUp/></div>
      </div>
    </div>
  )
}

export default Signup