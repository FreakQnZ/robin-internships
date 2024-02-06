import React from 'react'
import { UserProfile } from "@clerk/nextjs";

const page = () => {
  return (
    <div className=' flex w-full justify-center m-5'>
      <UserProfile/>
    </div>
  )
}


export default page