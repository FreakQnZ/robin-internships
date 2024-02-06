
import React from 'react'
import {currentUser} from '@clerk/nextjs';
import Image from 'next/image'
import Stats from '../components/startup/statsSt';
import StartupNavbar from '../components/startup/startupNavbar';
import ListingsCard from '../components/startup/listingsCard';
import Link from 'next/link'

export const metadata = {
  title: 'Startup Dashboard',
  description: 'Hire short term, competent interns for your startup now at Robin internships!',
}


const StartupDB = async  () => {

  const user = await currentUser();
  const uId = user?.id;


  async function getListings() {
    const result = await fetch(`${process.env.API_HOST}/getListingsForStartup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: uId }),
    }, { cache: 'no-store' });
    return result.json();
  }

  async function getAboutUs() {
    const res = await fetch(`${process.env.API_HOST}/getAboutUs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: uId }),
    }, { cache: 'no-store' });
    return res.json();
  }

  const retDataAbout = await getAboutUs()


  const listings = await getListings()


  return (
    <div className='lg:h-dvh w-full flex'>
      <StartupNavbar/>
      <div className=' w-full flex flex-col gap-4'>
        <div className=' flex gap-4 items-center justify-start w-full p-2 pl-10 pt-3'>
          <div className=' w-20 h-20 overflow-hidden rounded-full'><Image src={user?.imageUrl} alt="student" width={200} height={200}/></div>
          <p className=' text-2xl font-bold'>{user?.firstName } {user?.lastName}</p>
        </div>
        <div className=' w-full grid h-5/6 lg:grid-cols-6 grid-cols-1 gap-2  '>
          <div className=' lg:overflow-y-scroll lg:col-span-2 ml-5 m-2 rounded-box bg-green-200'>
            <p  className=' font-bold text0-2xl p-4  '>About the startup</p>
            <p className='p-5 text-lg'>{retDataAbout?.data}</p>
          </div>
          <div className=' bg-[#c8edfd] lg:col-span-4 m-2 ml-5 lg:ml-0 mr-5 rounded-box '>
            <p  className=' font-bold text0-2xl p-4  '>Current Openings</p>
            <ListingsCard listings={listings.data}/>
          </div>
          <div className=' lg:col-span-3 bg-[#f0f0f0] ml-5 m-2 rounded-box'>
            <p  className=' font-bold text0-2xl p-4  '>Project directory ( recent job roles in the company)</p>
          </div>
          <div className=' lg:col-span-3 bg-[#f0f0f0] lg:ml-0 m-2 mr-5 ml-5  rounded-box flex flex-col justify-evenly h-full'>
            <div className=' m-2 flex justify-center'>
              <Stats/>
            </div>
            <div className=' m-2 flex justify-center'>
              <Link href="/startupDashboard/create" className='btn w-3/4 h-24 text-3xl bg-sky-400 hover:bg-sky-300'>Create Listing</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartupDB