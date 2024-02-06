"use client"

import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import IsActiveApplicantsCard from './isActiveApplicantsCard';

const IsActiveListingsCard = ({ listings }) => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const openEditModal = (index) => {
    setOpenModalIndex(index);
  };

  const closeEditModal = () => {
    setOpenModalIndex(null);
    window.location.reload();
  };

  if (listings.length === 0) {
    return (
      <div className=" w-full text-3xl p-4">
        <p>No listings</p>
      </div>
    );
  }

  return (
    <>
      {listings.map((listing, index) => (
        <div key={index} role="alert" className="alert bg-base-300 border-0 rounded-none border-gray-300 border-b-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <div>
            <h3 className=" font-semibold">{listing.lname}</h3>
          </div>
          <div>
            <button onClick={() => openEditModal(index)} className="btn btn-sm btn-primary mr-2"><FaPlus /></button>
          </div>

          {openModalIndex === index && (
              <div
                id='modal'
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
              >
                <div className="bg-base-100 p-4 rounded-xl shadow-md w-4/5 m-2 h-5/6 flex flex-col justify-between">
                  <IsActiveApplicantsCard applicants={listing.acceptedApplicants} listingId={listing._id} />
                  <button className=' btn btn-primary w-full' onClick={closeEditModal}>Close</button>
                </div>
              </div>
            )}
        </div>
      ))}
    </>
  );
};

export default IsActiveListingsCard;
