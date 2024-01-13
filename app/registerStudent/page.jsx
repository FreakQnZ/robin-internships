"use client"

import React, { useState } from 'react';
import NavbarHome from '../components/navbarHome';
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
    college: '',
    email: '',
    listing: [],
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
    const res = await fetch('http://localhost:3000/api/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    console.log(res);

    router.push('/')

  };

  return (
    <div className=' flex flex-col h-full gap-10'>
      <NavbarHome/>
    <form onSubmit={handleSubmit} className="flex flex-col bg-white w-full p-5 sm:p-10 gap-8 rounded-md">
      <InputGroup1
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputGroup1
        name="college"
        label="College"
        value={formData.College}
        onChange={handleChange}
      />
      <InputGroup1
        name="email"
        label="Email *"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit" className=" btn">Submit</button>
    </form>
    </div>
  );
}

export default Page;
