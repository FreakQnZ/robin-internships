import React from 'react';

const ListingStatus = ({ companyName, listingName, status }) => {
  let message = "pending";
  let colour = "#b2b4b3";
  if(status === "PENDING"){
    message = "pending";
    colour = "#b2b4b3";
  }
  if(status === "ACCEPTED"){
    message = "accepted";
    colour = "#89f483";
  }
  if(status === "REJECTED"){
    message = "rejected";
    colour = "#f44d48";
  }
  return (
    <div role="alert" className="alert border-0 rounded-half border-gray-400 border-b-2" style={{backgroundColor:colour}}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <div>
        <h3 className="font-semibold">{companyName}</h3>
        <div className="text-xs">{listingName}</div>
      </div>
      <div>
        <div className="badge" style={{backgroundColor:colour}}>{message}</div>
      </div>
    </div>
  );
};

export default ListingStatus;
