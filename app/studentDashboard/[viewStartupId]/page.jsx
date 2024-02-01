import React from 'react'
import {currentUser} from '@clerk/nextjs';
import Image from 'next/image'
import Stats from '@/app/components/startup/statsSt';
import StartupNavbar from '@/app/components/startup/startupNavbar';
import ListingsCard from '@/app/components/startup/listingsCard';
import Link from 'next/link'


const StudentDB = async  ({params}) => {

  const user = params.viewStartupId;

  async function getListings() {
    const result = await fetch(`${process.env.API_HOST}/getListingsForStartup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user }),
    }, { cache: 'no-store' });
    return result.json();
  }

  async function getAboutUs() {

    const res = await fetch(`${process.env.API_HOST}/getAboutUs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user }),
    }, { cache: 'no-store' });
    return res.json();
  }

  async function getName() {

    const res = await fetch(`${process.env.API_HOST}/getStartupName`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user }),
    }, { cache: 'no-store' });
    return res.json();
  }

  async function getImage() {

    const res = await fetch(`${process.env.API_HOST}/getStartupImg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user }),
    }, { cache: 'no-store' });
    return res.json();
  }

  const retDataAbout = await getAboutUs()

  const listings = await getListings()
  
  const retDataName = await getName()

  const retDataImg = await getImage()


  const openModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  };

  return (
    <div className='h-dvh w-full flex'>

      <div className=' w-full flex flex-col gap-4'>
        <div className=' flex gap-4 items-center justify-start w-full m-2 ml-10 mt-3'>
          <div className=' w-20 h-20 overflow-hidden rounded-full'><Image src={+retDataImg.data} alt="student" width={200} height={200}/></div>
          <p className=' text-2xl font-bold'>{retDataName.data}</p>
        </div>
        <div className=' w-full grid h-5/6 grid-cols-6 gap-2 '>
          <div className=' overflow-y-scroll col-span-2 bg-[#c3f2cb] ml-5 m-2 rounded-box'>
            <p  className=' font-bold text0-2xl p-4  '>About the startup</p>
            <p className='p-5 text-lg'>{retDataAbout.data}</p>
          </div>
          <div className=' col-span-4 bg-base-300 m-2 mr-5 rounded-box'>
            <p  className=' font-bold text0-2xl p-4  '>Current Openings</p>
            <ListingsCard listings={listings.data} />
          </div>
          <div className=' col-span-3 bg-[#c8edfd] ml-5 m-2 rounded-box'>
            <p  className=' font-bold text0-2xl p-4  '>Project directory ( recent job roles in the company)</p>
          </div>
          <div className=' col-span-3 bg-base-300 m-2 mr-5 rounded-box flex flex-col justify-evenly h-full'>
            <div className=' m-2 flex justify-center'>
              <Stats/>
            </div>
            <div className=' m-2 flex justify-center'>
              <button className='btn w-3/4 h-24 text-3xl bg-sky-400 hover:bg-sky-300'>More About Us</button>
            </div>
          </div>
          {/* <div id='modal' className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={() => { document.getElementById('modal').style.display = 'none'; }}>&times;</span>
                <Link ><Image src={"/instaLogo.png"} width={100} height={100}></Image></Link>
                <Link><Image src={"/linkedinLogo.webp"} width={100} height={100}></Image></Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default StudentDB