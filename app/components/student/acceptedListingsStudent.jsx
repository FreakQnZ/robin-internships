"use client"

import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';


const ListingsStudent = ({ data, index, firstName, lastName, email, college, userId, studentPhoneNumber }) => {

  const [openModalIndex, setOpenModalIndex] = useState(null);

  console.log(data)


  const openEditModal = (index) => {
    setOpenModalIndex(index);
  };

  const closeEditModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <div role="alert" className="alert bg-[#54c6fe] border-0 rounded-half border-gray-400 border-b-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <div>
        <h3 className="font-semibold">{data.startupName}</h3>
        <div className="text-xs">{data.lname}</div>
      </div>
      <div>
        <button onClick={() => openEditModal(index)} className="btn btn-sm btn-primary mr-2"><FaPlus /></button>
        <button className="btn btn-sm"><IoMdClose /></button>

        {openModalIndex === index && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="modal-box">
              {/* <h3 className="font-bold text-lg">Internship : {data.lname}</h3> */}
              <h3 className="font-bold text-lg">{data.lname}</h3>

              {/* <Link href={`/studentDashboard/${data?.startupId}`} target="_blank"><p className="py-4">Company name : {data.startupName}</p></Link>  */}
              <p className="py-4">Club : {data.startupName}</p>
              <p className="py-4">Domain : {data.domain}</p>
              {/* <p className="py-4">Duration : {data.duration}</p> */}
              {/* <p className="py-4">Stipend : {data.stipend}</p> */}
              <p className="py-4">Description: {data.description}</p>
              <div className="modal-action justify-between">
                <button onClick={closeEditModal} className="btn">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingsStudent;
