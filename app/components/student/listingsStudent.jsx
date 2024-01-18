"use client"
import React from 'react'
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ListingsStudent = () => {
  return (
  <div role="alert" className="alert bg-base-200 border-0 rounded-none border-gray-300 border-b-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div>
      <h3 className=" font-semibold">Company Name</h3>
      <div className="text-xs">Listing Name</div>
    </div>
    <div>
      <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn btn-sm btn-primary mr-2"><FaPlus /></button>
      <button className="btn btn-sm"><IoMdClose /></button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Listing Name</h3>
          <p className="py-4">Company Name</p>
          <p className="py-4">Domain : </p>
          <p className="py-4">Duration : </p>
          <p className="py-4">Stipend : </p>
          <p className="py-4">Description</p>
          <div className="modal-action justify-between">
            <button onClick={()=>document.getElementById('my_modal_1').close()} className='btn btn-primary'>Apply</button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
    
  </div>
  )
}

export default ListingsStudent