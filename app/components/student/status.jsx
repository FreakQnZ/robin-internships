import React from 'react'

const ListingStatus = () => {
  return (
  <div role="alert" className="alert bg-base-200 border-0 rounded-none border-gray-300 border-b-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div>
      <h3 className=" font-semibold">Company Name</h3>
      <div className="text-xs">Listing Name</div>
    </div>
    <div>
      <div className="badge badge-primary">primary</div>
    </div>
    
  </div>
  )
}

export default ListingStatus