import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbarHome'

function Hero() {
    return (
    <div className="hero bg-white lg:mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
            <Image className='pr-20 lg:pr-0 lg:pb-24' title='box office' src="/studentHomeFirst.jpeg" alt="box office" width={650} height={650}></Image>
            <div className=' flex flex-col'>
            <h1 className="lg:text-5xl text-3xl leading-9 font-semibold lg:leading-relaxed">Start Your Journey: <br /> Find Internships that  <br /> don&apos;t require WorkEx</h1>
            <p className="py-6 tracking-wider">At Robin internships, you can find a wide range of  internships at startups. These internships do NOT require you to have prior work experience or  technical skill.</p>
            <div><button className="btn btn-primary btn-wide">Get Started</button></div>
            </div>
        </div>
    </div>
    )
  }

function Stats(){
    return(
        <div className='flex lg:flex-row pl-16 lg:ml-0 flex-col justify-around w-full mb-10'>
            <div >
                <p className=' pt-5 tracking-wider'>Current Hiring entries</p>
                <h1 className=" text-4xl lg:text-5xl font-semibold" >102</h1>
            </div>
            <div>
                <p className=' pt-5 tracking-wider'>Current Internship Positions</p>
                <h1 className=" text-4xl lg:text-5xl font-semibold" >7,366</h1>
            </div>
            <div>
                <p className=' pt-5 tracking-wider'>Average intern stipend</p>
                <h1 className=" text-4xl lg:text-5xl font-semibold" >$230</h1>
            </div>
            <div>
                <p className=' pt-5 tracking-wider'>Students Who Found Internships</p>
                <h1 className=" text-4xl lg:text-5xl font-semibold" >90.4%</h1>
            </div>
        </div>
    )
}

function Information1(){
    return(
        <>
        <div className="hero bg-sky-200 w-full">
            <div className="hero-content flex-col lg:flex-row w-full justify-between m-10">
                <Image title='student' src="/studentHomeSecond.png" alt="student" width={550} height={550} />
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
        <div className="flex flex-col gap-2 bg-sky-200">
            <h1 className=" text-4xl lg:text-5xl font-bold text-center leading-normal mb-4">Sustainable Growth Opportunities</h1>
            <p className=" text-center font-semibold lg:text-3xl text-xl">Earn stipends and build your <br /></p>
            <p className=" text-center font-semibold lg:text-3xl text-xl">resume at the same time!</p>
        </div>
    )
}

function Information2(){
    return(
        <div className="hero bg-sky-200 w-full">
        <div className="hero-content flex-col lg:flex-row w-full justify-between m-10">
            <Image title='student' src="/studentHomeThird.png" alt="student" width={550} height={550} />
            <div>
            <h1 className="text-5xl font-bold">Boost Your Resume</h1>
            <p className="py-6">Our platform is built for students to gain experience through <br /> working at startups and also by offering internships in multiple domains for <br /> students to boost their resumes!</p>
            <button className="btn btn-primary btn-wide">Join Now!</button>
            </div>
        </div>
        </div>
    )
}


function TrustedBy(){
    return(
        <div className=" flex flex-col gap-8  text-center">
        <h1 className=' text-4xl lg:text-5xl pt-6 font-bold p-3'>Trusted By</h1>
        <div className='flex item-center flex-col lg:flex-row font-semibold text-3xl gap-2 justify-evenly'>
            <div>
                <div>
                    <Image src="/company1.png" width={122} height={122}/>
                </div>
                <p>Abhaya</p>
            </div>
            <div>
                <div className='flex justify-center'>
                 <Image src="/company2.png" width={97} height={97}/>
                </div>
               <p>Smart Chakra</p>
            </div>
            <div>
            <div className='flex justify-center'>
                <Image src="/company3.png" width={100} height={100}/>
            </div>
                <p>Vanadootha</p>
            </div>
            <div>
                <Image src="/company4.png" width={150} height={150}/>
                <p>Aatmatrisha</p>
            </div>
        </div>
    </div>
    )
}

function StudentHomePage(){
    return(
        <div className=' w-full'>
            <Navbar />
            <Hero />
            <Stats /> 
            <Information1 />
            <Sustainable />
            <Information2 />
            <TrustedBy />
        </div>
    )
}

export default StudentHomePage;