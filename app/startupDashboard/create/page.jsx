"use client"

import React, { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'
import StartupNavbar from '@/app/components/startup/startupNavbar';

function InputGroup1({
  label,
  name,
  value,
  onChange,
  type = "text",
  disabled,
}) {
  return (
    <div className="relative z-0 w-full">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required 
        className={`peer block py-2.5 px-1 w-full text-sm text-gray-600 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464] ${
          disabled ? "border-gray-300" : "border-gray-400"
        }`}
        placeholder=" "
        disabled={disabled}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
      >
        {label}
      </label>
    </div>
  );
}

const Page = () => {

  const router = useRouter()

  const {userId} = useAuth();
  const uId = userId;


  const [open,setOpen] = useState(false)
  const [formData, setFormData] = useState({
    userId : uId,
    lname: '',
    description: '',
    domain: '',
    stipend: '0',
    duration: 'Till AT',
    email : '',
    requirements : 'none',
    internsRequired : '69',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/createListing`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })




  };

  return (
    <div className=' h-dvh flex'>
      <StartupNavbar/>
      <section className='flex-1'>
        <div className=' bg-sky-200 w-full'>
          <p className=' text-3xl ml-10 p-4 pt-10'>Internship Details</p>
        </div>
        <form onSubmit={handleSubmit} className=" max-w-screen-lg h-full flex flex-col bg-white w-full p-5 sm:p-10 gap-8 rounded-md">
          <InputGroup1
            name="lname"
            label="Name of the Listing"
            value={formData.lname}
            onChange={handleChange}
          />
          <InputGroup1
            name="domain"
            label="Internship Domain"
            value={formData.domain}
            onChange={handleChange}
          />
          {/* <InputGroup1
            name="stipend"
            label="Stipend in Rupees"
            type="number"
            value={formData.stipend}
            onChange={handleChange}
          /> */}
          <InputGroup1
            name="duration"
            label="Internship Duration"
            value={formData.duration}
            onChange={handleChange}
          />
          {/* <InputGroup1
            name="description"
            label="Internship Description"
            value={formData.description}
            onChange={handleChange}
          /> */}
          {/* <InputGroup1
            name="requirements"
            label="Internship requirements"
            value={formData.requirements}
            onChange={handleChange}
          /> */}
          <InputGroup1
            name="email"
            label="email of your startup"
            type = "email"
            value={formData.email}
            onChange={handleChange}
          />
          {/* <InputGroup1
            name="internsRequired"
            label="Interns Required"
            type = "number"
            value={formData.internsRequired}
            onChange={handleChange}
          /> */}
          

          <button type="submit" className=" btn bg-blue-400 hover:bg-blue-300" onClick={()=>setOpen(!open)}>Create Listing</button>

          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open={open}>
            <div className="modal-box">
              <h3 className="font-bold text-lg">Listing Created!</h3>
              <p className="py-4">Thank you for creating a listing <br /> click the button below to go back to Dashboard</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn" onClick={()=>window.location.href="/startupDashboard"}>Back</button>
                </form>
              </div>
            </div>
          </dialog>
        </form>
      </section>
    </div>
  );
}

export default Page;
