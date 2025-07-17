import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbarHome'

function Hero() {
  return (
    <div className="hero min-h-56 bg-sky-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=''><Image title='logo' src="/logo.png" width={650} height={650}></Image></div>
            <div>
            <h1 className="text-5xl font-bold">Welcome to Robin Internships</h1>
            <p className="py-6 text-lg">We&apos;re dedicated to empowering your career growth.</p>
            </div>
        </div>
    </div>
  )
}

function Mission(){
    return(
        <>
            <div className="hero min-h-72 w-full">
            <div className="hero-content text-center flex flex-col items-center justify-center w-full">
                <div className="">
                <h1 className="text-5xl font-semibold py-10">Our Mission</h1>
                    <div className=' text-xl leading-8 py-4'>
                        <p >We believe in providing internships to <i><strong>students</strong></i> to help start off with their interning journey.</p>
                        <p >We believe in finding competent interns for <i><strong>startups</strong></i> that could use short term responsible help.</p>
                        <p >We believe in aiding <i><strong>colleges</strong></i> upskill their students and making them hire-able</p>
                    </div>
                </div>
                <div className='pl-12 lg:pl-20'><Image title='Our Mission' src = "/OurMission.jpeg" width={700} height = {500} /></div>
                <div className='flex flex-row justify-around w-full'>
                    <div >
                        <h1 className=" text-4xl lg:text-5xl font-semibold" >2000</h1>
                        <p className=' pt-5 tracking-wider'> internships completed</p>
                    </div>
                    <div>
                        <h1 className=" text-4xl lg:text-5xl font-semibold">1000</h1>
                        <p className=' pt-5 tracking-wider'>interns have joined</p>
                    </div>
                    <div>
                        <h1 className=" text-4xl lg:text-5xl font-semibold">100</h1>
                        <p className=' pt-5 tracking-wider'>startups have joined</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}


function Start(){
    return(
        <>
        <div className="hero min-h-72 bg-sky-400" >
            <div></div>
            <div className="hero-content text-center text-white">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold pb-10">Start Your Journey Now!</h1>
                    <div className=' flex gap-4 justify-center'>
                    <button className="btn lg:btn-wide btn-primary hover:bg-white hover:text-blue-500 hover:border-blue-500 border-transparent transition duration-300">
                        Start Now
                    </button>
                    <button className="btn lg:btn-wide btn-primary hover:bg-white hover:text-blue-500 hover:border-blue-500 border-transparent transition duration-300">
                        Contact Us
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


function LandingPage(){
    return(
        <div className=' w-full'>
            <Navbar />
            <Hero />
            <Mission />
            <Start />
        </div>
    )
}

export default LandingPage