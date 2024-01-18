"use client"

import React, { useState } from 'react'
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
    <div className="card w-72 sm:w-60 xl:w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title</h2>
        <p>Description</p>
        <div className="card-actions justify-end">
          <button onClick={openEditModal} className="btn btn-primary">View Applicants</button>
        </div>
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