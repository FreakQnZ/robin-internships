import React from 'react'
import StudentNavbar from '../components/student/studentNavbar'
import ListingsStudent from '../components/student/listingsStudent'
import {currentUser} from '@clerk/nextjs';
import Image from 'next/image'
import Stats from '../components/student/stats';
import Lor from '../components/student/lor';
import ListingStatus from '../components/student/status';

const StudentDB = async  () => {

  const user = await currentUser();
  const uId = user?.id;
  async function getStudentDetails() {
    const result = await fetch(`https://robin-internships.vercel.app/api/studentDetails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: uId}),
    }, { cache: 'no-store' });
    return result.json();
  }

  async function getListing() {
    const result = await fetch(`https://robin-internships.vercel.app/api/getListing`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: uId}),
    }, { cache: 'no-store' });
    return result.json();
  }

  const listings = await getListing()
  const details = await getStudentDetails()
  return (
    <div className='h-dvh w-full flex'>
      <StudentNavbar act="home"/>
      <div className=' h-full w-full flex'>
        <div className=' h-full w-1/2 flex flex-col'>
          <div className=' flex flex-col gap-2 h-1/2 p-5'>
            <div className=' flex gap-12 items-center justify-start w-full m-2'>
              <div className=' w-48 h-48 overflow-hidden rounded-full'><Image src={user?.imageUrl} alt="student" width={200} height={200}/></div>
              <div className='flex flex-col gap-6'>
                <p className=' text-2xl font-bold'>{user?.firstName } {user?.lastName}</p>
                <a href={details?.data?.student?.resume} target='_blank' className='btn btn-wide btn-primary'>Student Resume</a>
                <a href={details?.data?.student?.portfolio} target='_blank' className='btn btn-wide btn-primary'>Portfolio</a>
              </div>
            </div>
            <Stats/>
          </div>
          <div className=' h-1/2 p-5'>
            <Lor list={details?.data?.student?.Lor}/>
          </div>
        </div>
        <div className=' h-full w-1/2'>
          <div className=' h-2/3 p-5 flex flex-col gap-2'>
            <p className=' text-2xl'>Active Internships</p>
            <div className=' flex-1 bg-base-200 w-full rounded-box p-2 overflow-y-scroll flex flex-col gap-2'>
              {listings.map((listing, index) => (
                  <ListingsStudent
                    key={index}
                    data={listing}
                    index={index}
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                    email={details?.data?.student?.email}
                    college={details?.data?.student?.college}
                    userId={uId}
                  />
                ))}
            </div>
          </div>
          <div className=' h-1/3 p-5 flex flex-col gap-2'>
            <p className=' text-2xl'>Application Status</p>
            <div className=' flex-1 bg-base-200 w-full rounded-box p-2 overflow-y-scroll flex flex-col gap-2'>
              <ListingStatus/>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default StudentDB