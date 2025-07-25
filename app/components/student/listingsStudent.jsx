"use client"

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';


const ListingsStudent = ({ data, index, firstName, lastName, email, college, userId, studentPhoneNumber }) => {

  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [showToast, setShowToast] = useState(false);


  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const openEditModal = (index) => {
    setOpenModalIndex(index);
  };

  const closeEditModal = () => {
    setOpenModalIndex(null);
  };

  async function applyForListing() {
    const result = await fetch(`/api/applyForListing`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        listingId: data?.id,
        studentName: `${firstName} ${lastName}`,
        studentEmail: email,
        studentCollege: college,
        studentPhoneNumber: studentPhoneNumber
      }),
    });
    const response = await result.json();
    closeEditModal();
    handleToast();
    if (response.success) {
      window.location.reload();
    } else {
      alert(response.message || 'Failed to apply.');
    }
    return response;
  }

  return (
    <div role="alert" className="alert bg-[#54c6fe] border-0 rounded-half border-gray-400 border-b-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <div>
        <h3 className="font-semibold">{data.startupName}</h3>
        <div className="text-xs">{data.lname}</div>
      </div>
      <div>
        <button onClick={() => openEditModal(index)} className="btn btn-sm btn-primary mr-2 tooltip" data-tip="view internship"><FaPlus /></button>
        <button className="btn btn-sm btn-primary mr-2 tooltip"><IoMdClose /></button>

        {openModalIndex === index && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="modal-box">


              <Link href={`/studentDashboard/${data?.startupId}`} target="_blank">
                <button className="w-full text-center px-4 py-3 rounded-md bg-blue-100 text-blue-800 font-semibold border border-blue-300 hover:bg-blue-200 transition-all duration-200">
                  {data.startupName}
                </button>
            </Link>

             <h3 className="font-bold text-lg">Internship : {data.lname}</h3>


              <p className={data.domain == '' ? 'hidden' : 'py-4'}>Domain : {data.domain}</p>
              <p className="py-4">Duration : {data.duration}</p>
              <p className="py-4">Stipend : {data.stipend}</p>
              <p className="py-4">Description: {data.description}</p>
              <div className="modal-action justify-between">
                <button onClick={() => applyForListing()} className='btn btn-primary'>Apply</button>
                <button onClick={closeEditModal} className="btn">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {showToast && (
        <div className="toast">
          <div className="alert alert-info">
            <span>Applied to listing</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingsStudent;
