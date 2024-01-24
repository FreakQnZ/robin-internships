import React from 'react'
import {currentUser} from '@clerk/nextjs';
import Image from 'next/image'
import Stats from '../components/startup/statsSt';
import StartupNavbar from '../components/startup/startupNavbar';
import ListingsCard from '../components/startup/listingsCard';
import Link from 'next/link'


const StudentDB = async  () => {
  console.log("hello")
  const user = await currentUser();
  const uId = user?.id;

  async function getAboutUs() {
    const res = await fetch(`http://localhost:3000/api/getAboutUs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: uId }),
    }, { cache: 'no-store' });
    return res.json();
  }
  const retData = await getAboutUs()
  console.log(retData)
  return (
    <div className='h-dvh w-full flex'>
      <StartupNavbar/>
      <div className=' w-full flex flex-col gap-4'>
        <div className=' flex gap-4 items-center justify-start w-full m-2 ml-10 mt-3'>
          <div className=' w-20 h-20 overflow-hidden rounded-full'><Image src={user?.imageUrl} alt="student" width={200} height={200}/></div>
          <p className=' text-2xl font-bold'>{user?.firstName } {user?.lastName}</p>
        </div>
        <div className=' w-full grid h-5/6 grid-cols-6 gap-2 '>
          <div className=' col-span-2 bg-base-300 ml-5 m-2 rounded-box'>
            <p  className=' font-bold text0-2xl p-4  '>About the startup</p>
            <p>{retData?.data}</p>
          </div>
          <div className=' col-span-4 bg-base-300 m-2 mr-5 rounded-box'>
            <p  className=' font-bold text0-2xl p-4  '>Current Openings</p>
            <ListingsCard/>
            <ListingsCard/>
          </div>
          <div className=' col-span-3 bg-base-300 ml-5 m-2 rounded-box'>
            <p  className=' font-bold text0-2xl p-4  '>Project directory ( recent job roles in the company)</p>
          </div>
          <div className=' col-span-3 bg-base-300 m-2 mr-5 rounded-box flex flex-col justify-evenly h-full'>
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

export default StudentDB