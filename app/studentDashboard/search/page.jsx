import React from 'react'
import {currentUser} from '@clerk/nextjs';
import Image from 'next/image'
import StudentNavbar from '@/app/components/student/studentNavbar';
import Stats from '@/app/components/student/stats';
import Lor from '@/app/components/student/lor';
import ListingsStudent from '@/app/components/student/listingsStudent';
import ListingStatus from '@/app/components/student/status';

const StudentDBSearch = async  () => {
  const user = await currentUser();
  return (
    <div className='h-dvh w-full flex'>
      <StudentNavbar act="search"/>
      <div className=' h-full w-full bg-red-500 flex flex-col items-center gap-5'>
        <div className=' p-2 m-2'>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default StudentDBSearch