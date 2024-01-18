import React from 'react'
import StartupNavbar from '../components/startup/startupNavbar'
import Link from 'next/link'
import ListingsCard from '../components/startup/listingsCard'

const StartupDB = () => {
  return (
    <div className=' h-full flex flex-col'>
      <StartupNavbar/>
      <div className=' flex-1 grid md:grid-cols-3 grid-cols-1'>
        <div className=' overflow-y-scroll col-span-2 bg-primary'>
          <div className=' sm:h-96 h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-2 m-2 gap-5'>
            <ListingsCard/>
            <ListingsCard/>
            <ListingsCard/>
            <ListingsCard/>

          </div>
        </div>
        <div className=' bg-base-300 flex flex-col items-center'>
            <div className=' w-full bg-base-300 flex flex-col items-center p-3 gap-4'>
              <div className=' text-2xl font-semibold'>Create New Listing</div>
              <Link href="createListing" className="indicator">
                <span className="indicator-item badge">new</span> 
                <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg grid place-items-center tracking-wider btn-primary">
                  Click Here
                </div>
              </Link>
            </div>
            <div className=' w-full bg-base-300 flex flex-col items-center p-3 gap-8'>
              <div className=' text-2xl font-semibold'>Contracts to review</div>
                <div className="stats stats-vertical xl:stats-horizontal lg:stats-vertical shadow">
    
                  <div className="stat place-items-center">
                    <div className="stat-figure text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-value">0</div>
                    <div className="stat-desc">Contracts without</div>
                    <div className="stat-desc">Future Milestone</div>
                  </div>
                      
                  <div className="stat place-items-center">
                    <div className="stat-figure text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-value">0</div>
                    <div className="stat-desc">Contracts without</div>
                    <div className="stat-desc">assigned tasks</div>
                  </div>       
                </div>
            </div>
            <div className='w-full bg-base-300 flex flex-col items-center p-1 gap-11'>
              <div className='text-2xl font-semibold'>VERTICALS HIRING IN</div>
              <div className=' flex flex-col gap-8 rounded-box bg-base-200 w-10/12 p-4'>
                <div className='text-2xl'>Average Intern CSCORE : </div>
                <div className='text-2xl'>Total Interns :</div>
                <div className='text-2xl'>Average Intern Earning :</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StartupDB