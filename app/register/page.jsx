import React from 'react'
import NavbarHome from '../components/navbarHome'
import Footer from '../components/footer'
import Link from 'next/link'

const RegisterPage = () => {
  return (
    <div className=' flex flex-col justify-between h-dvh'>
      <NavbarHome/>
      <div className="flex h-full flex-col w-full lg:flex-row p-2 ">
        <div className="grid flex-grow h-full card  rounded-box place-items-center">
          <div className=' flex flex-col w-full justify-between h-1/2 items-center gap-5'>
            <h1 className=' text-3xl glass p-4 rounded-md'>For companies</h1>
            <p className=' w-64 text-lg'>We are a rising platform that hire's interns with the right skills for you</p>
            <p>Register your <span className=' font-semibold'>startup</span> now!</p>
            <Link className=' btn ' href="/registerStartup">Register now</Link>
          </div>
        </div> 
        <div className="divider lg:divider-horizontal">OR</div> 
        <div className="grid flex-grow h-full card rounded-box place-items-center">
          <div className=' flex flex-col w-full items-center gap-5 justify-between h-1/2'>
            <h1 className=' text-3xl glass p-4 rounded-md'>For students</h1>
            <p className=' w-64 text-lg'>We are a rising platform on the lookout for aspiring interns and provide them with the needfull experience</p>
            <p>Register as a <span className=' font-semibold'>student</span> now!</p>
            <Link className=' btn' href="/registerStudent">Register now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage