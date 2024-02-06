import React from 'react'

const Stats = () => {
  return (
  <div className=' w-3/4 m-2 flex flex-col gap-2'>
    <div className="stats shadow stats-vertical lg:stats-horizontal bg-base-200">
      <div className="stat bg-blue-200">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div className="stat-title">Average Intern <br /> Stipend</div>
        <div className="stat-value">0</div>
        {/* <div className="stat-desc">All time</div> */}
      </div>
      
      <div className="stat bg-blue-200">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
        </div>
        <div className="stat-title">Active <br /> Contracts</div>
        <div className="stat-value">0</div>
        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
      </div>     
    </div>
  </div>
  )
}

export default Stats