import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbarHome'

function Hero() {
    return (
    <div className="hero bg-white lg:mt-20">
        <div className="hero-content flex-col lg:gap-32 lg:flex-row-reverse items-center">
            <Image className='' title='box office' src="/startupHomeFirst.jpeg" alt="box office" width={500} height={500}></Image>
            <div className=' flex flex-col items-start'>
            <h1 className="lg:text-5xl text-3xl leading-9 font-semibold lg:leading-relaxed">Find Interns for <br /> Your Startup now!</h1>
            <p className="py-6 my-6 tracking-wider">Hire short term, competent interns for your startup now at Robin internships!</p>
            <div className='flex justify-center'><button className="btn btn-primary btn-wide">Get Started</button></div>
            </div>
        </div>
    </div>
    )
  }

function Stats(){
    return(
        <>
        <div className='flex lg:flex-row pl-16 lg:ml-0 flex-col justify-around w-full mb-10'>
            <div >
                <p className=' pt-5 tracking-wider'>Startup Success Stories</p>
                <h1 className=" text-4xl lg:text-5xl font-semibold" >203</h1>
            </div>
            <div>
                <p className=' pt-5 tracking-wider'>Current Success Rate</p>
                <h1 className=" text-4xl lg:text-5xl font-semibold" >97.7%</h1>
            </div>
            <div>
                <p className=' pt-5 tracking-wider'>Total Interns Hired</p>
                <h1 className=" text-4xl lg:text-5xl font-semibold" >214</h1>
            </div>
            <div>
                <p className=' pt-5 tracking-wider'>% Interns Satisfied</p>
                <h1 className=" text-4xl lg:text-5xl font-semibold" >90.4%</h1>
            </div>
        </div>
        </>
    )
}

function Information1(){
    return(
        <>
        <div className="hero bg-sky-200 w-full">
            <div className="hero-content flex-col lg:flex-row w-full justify-between m-10">
                <Image className='pb-10' title='student' src="/startupHomeSecond.png" alt="student" width={550} height={550} />
                <div>
                <h1 className="text-5xl font-bold">Join the Internship <br /> Revolution</h1>
                <p className="py-6">Our platform is tailored for students that are starting off with interning. <br /> At Robin internships, find internships that <br /> dont always ask you for prior work experience or certifications! </p>
                <button className="btn btn-primary btn-wide">Join Now!</button>
                </div>
            </div>
        </div>
        </>
    )
}

function Sustainable(){
    return(
        <div className="flex flex-col gap-2 bg-sky-200 pb-12">
            <h1 className=" text-4xl lg:text-5xl font-bold text-center leading-normal mb-4">Sustainable Hiring</h1>
            <p className=" text-center font-semibold lg:text-3xl text-xl">Robin Internships organisations can<br /></p>
            <p className=" text-center font-semibold lg:text-3xl text-xl">hire interns to fill in any roles and also</p>
            <p className=" text-center font-semibold lg:text-3xl text-xl">to work for any range of tenures.</p>
            <div className=' flex justify-center p-2 m-2'><button className="btn btn-primary btn-wide">Join Now!</button></div>
        </div>
    )
}

function TrustedBy(){
    return(
    <div className=" flex flex-col gap-8  text-center">
        <h1 className=' text-4xl lg:text-5xl pt-6 font-bold p-3'>Trusted By</h1>
        <div className='flex flex-col lg:flex-row font-semibold text-3xl gap-2 justify-evenly'>
            <div >
                <h2>102</h2>
            </div>
            <div>
                <h2>102</h2>
            </div>
            <div>
                <h2>102</h2>
            </div>
            <div>
                <h2>102</h2>
            </div>
        </div>
    </div>
    )
}

function StartupHomePage(){
    return(
        <>
            <Navbar />
            <Hero />
            <Stats /> 
            <Information1 />
            <Sustainable />
            <TrustedBy />
        </>
    )
}

export default StartupHomePage;