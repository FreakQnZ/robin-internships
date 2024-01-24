"use client"
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import ApplicantsCard from './applicantsCard';

const ListingsCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openEditModal = () => {
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
  };
  return (
  <div role="alert" className="alert bg-base-300 border-0 rounded-none border-gray-300 border-b-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div>
      <h3 className=" font-semibold">Listing Name</h3>
    </div>
    <div>
      <button onClick={openEditModal} className="btn btn-sm btn-primary mr-2"><FaPlus /></button>
    </div>

    {isModalOpen && (
        <div
          id='modal'
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-base-100 p-4 rounded-xl shadow-md min-w-16 m-2">
            <ApplicantsCard/>
            <ApplicantsCard/>
            <button className=' btn btn-primary w-full' onClick={closeEditModal}>Close</button>
          </div>
        </div>
      )}
    
  </div>
  )
}

export default ListingsCard