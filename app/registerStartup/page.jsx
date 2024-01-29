"use client"

import React, { useState } from 'react';
// import NavbarHome from '../components/navbarHome';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'

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

  const { isSignedIn, user, isLoaded } = useUser();
  const uId = user?.id;

  const [formData, setFormData] = useState({
    userId : uId,
    name: '',
    desc: '',
    email: '',
    domain: '',
    phno: '',
    insta: '',
    linkedin: '',
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
    // console.log(formData);
    const HOST = process.env.API_HOST
    const res = await fetch(`https://robinit.in/api/newStartup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    console.log(res);

    router.push('/startupDashboard');
  };

  return (
    <div className=' flex flex-col items-center h-full'>
      {/* <NavbarHome/> */}
      <div className="navbar bg-blue-200">
        <a className="btn btn-ghost text-2xl">Startup Onboarding</a>
      </div>
    <form onSubmit={handleSubmit} className="flex flex-col border shadow-lg w-1/2 p-5 sm:p-10 gap-8 rounded-md m-5 ">
      <p className=' text-center text-xl font-semibold'>Start your Journey now!</p>
      <InputGroup1
        name="name"
        label="Startup Name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputGroup1
        name="desc"
        label="Startup Description"
        value={formData.desc}
        onChange={handleChange}
      />
      <InputGroup1
        name="email"
        label="Email *"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputGroup1
        name="domain"
        label="Domain of work"
        value={formData.domain}
        onChange={handleChange}
      />
      <InputGroup1
        name="phno"
        label="Contact Number"
        type="tel"
        value={formData.phno}
        onChange={handleChange}
      />
      <InputGroup1
        name="insta"
        label="Instagram"
        value={formData.insta}
        onChange={handleChange}
      />
      <InputGroup1
        name="linkedin"
        label="Linkedin"
        value={formData.linkedin}
        onChange={handleChange}
      />

      <button type="submit" className=" btn">Submit</button>
    </form>
    </div>
  );
}

export default Page;
