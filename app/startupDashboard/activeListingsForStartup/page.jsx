
import React from 'react'
import {currentUser} from '@clerk/nextjs';
import StartupNavbar from '@/app/components/startup/startupNavbar';
import IsActiveListingsCard from '@/app/components/startup/isActiveListingsCard';


export const metadata = {
  title: 'Startup Dashboard',
  description: 'Hire short term, competent interns for your startup now at Robin internships!',
}


const StartupDB = async  () => {

  const user = await currentUser();
  const uId = user?.id;

  async function getIsActiveListingsForStartup() {
    const result = await fetch(`${process.env.API_HOST}/getIsActiveListingsForStartup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: uId }),
    }, { cache: 'no-store' });
    return result.json();
  }


  const listings = await getIsActiveListingsForStartup()
  console.log(listings)

  return (
    <div className='lg:h-dvh w-full flex'>
      <StartupNavbar/>
      <div className=' w-full flex flex-col gap-4'>
        <div className=' w-full grid h-5/6 lg:grid-cols-6 grid-cols-1 gap-2 '>
          <div className=' lg:col-span-4 bg-base-300 m-2 ml-5 lg:ml-0 mr-5 rounded-box '>
            <p  className=' font-bold text0-2xl p-4  '>Current Openings</p>
            <IsActiveListingsCard listings={listings}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartupDB