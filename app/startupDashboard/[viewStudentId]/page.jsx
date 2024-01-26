import React from 'react'
import StudentNavbar from '@/app/components/student/studentNavbar';
import ListingsStudent from '@/app/components/student/listingsStudent';
import {currentUser} from '@clerk/nextjs';
import Image from 'next/image'
import Stats from '@/app/components/student/stats';
import Lor from '@/app/components/student/lor';
import ListingStatus from '@/app/components/student/status';

const StudentDB = async  ({params}) => {


  const user = params.viewStudentId;
  async function getStudentDetails() {
    const result = await fetch(`/api/studentDetails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user}),
    }, { cache: 'no-store' });
    return result.json();
  }
  
  const details = await getStudentDetails()
  return (
    <div className='h-dvh w-full flex'>
      <div className=' h-full w-full flex'>
        <div className=' h-full w-1/2 flex flex-col'>
          <div className=' flex flex-col gap-2 h-1/2 p-5'>
            <div className=' flex gap-12 items-center justify-start w-full m-2'>
              <div className=' w-48 h-48 overflow-hidden rounded-full'><Image src={details?.data?.student?.imgURL } alt="student" width={200} height={200}/></div>
              <div className='flex flex-col gap-6'>
                <p className=' text-2xl font-bold'>{details?.data?.student?.firstName } {details?.data?.student?.lastName}</p>
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
              <ListingsStudent/>
              <ListingsStudent/>
              <ListingsStudent/>
              <ListingsStudent/>
              <ListingsStudent/>
              <ListingsStudent/>
              <ListingsStudent/>
              <ListingsStudent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDB

// import React from "react";

// const sb = ({params}) => {
//     return (
//         <h1>{params.viewStudentId}</h1>
//     )
// }

// export default sb;