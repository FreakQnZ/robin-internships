"use client"

import React, { useState , useEffect } from 'react';
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

  const fname = user?.fullName
  const imgURL = user?.imageUrl



  const [isUserVerified, setIsUserVerified] = useState(null);
  console.log(isUserVerified)
  const [formData, setFormData] = useState({
    userId : uId,
    firstName: "",
    lastName: "",
    age: 0,
    gender: '',
    phoneNumber: '',
    course: '',
    Domains: '',
    yearOfGraduation: 0,
    email: '',
    college : '',
    resume: '',
    portfolio: '',
    imgURL : imgURL,
  });

  useEffect(() => {
    async function checkUserExists() {
      const res = await fetch(`api/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: uId }),
      });
      const data = await res.json();
      setIsUserVerified(data);
    }
    checkUserExists();
  }, []);
  
  console.log("after",isUserVerified)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`api/newStudent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json();
    if (data.success) {
      router.push('/studentDashboard');
    } else {
      alert("Registration failed: " + data.message);
    }
  };



  return (
    <div className=' flex flex-col items-center h-full'>
    {/* {isUserVerified?.success !== true ? ( */}
      <>
            <div className="navbar bg-blue-200">
              <a className="btn btn-ghost text-2xl">Student Onboarding</a>
            </div>
          <form onSubmit={handleSubmit} className="flex flex-col border shadow-lg lg:w-1/2 w-5/6 p-5 gap-8 rounded-md m-5 ">
            <p className=' text-center text-xl font-semibold'>Start your Journey now!</p>
            <InputGroup1
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputGroup1
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputGroup1
              name="age"
              label="Age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
            <InputGroup1
              name="gender"
              label="Gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <InputGroup1
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputGroup1
              name="phoneNumber"
              label="Contact Number (Whatsapp)"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <InputGroup1
              name="course"
              label="Course / Degree"
              value={formData.course}
              onChange={handleChange}
            />
            <InputGroup1
              name="Domains"
              label="Domains worked in"
              value={formData.Domains}
              onChange={handleChange}
            />
            <InputGroup1
              name="yearOfGraduation"
              label="Year of Graduation"
              type="number"
              value={formData.yearOfGraduation}
              onChange={handleChange}
            />
            <InputGroup1
              name="college"
              label="college"
              value={formData.college}
              onChange={handleChange}
            />
            <InputGroup1
              name="resume"
              label="Resume"
              value={formData.resume}
              onChange={handleChange}
            />
            <InputGroup1
              name="portfolio"
              label="Portfolio"
              value={formData.portfolio}
              onChange={handleChange}
            />

            <button type="submit" className=" btn">Submit</button>
          </form>
        </>
          {/* // ):(<h1>Already Logged In</h1>)} */}
      </div>
      
  
  );
}

export default Page;
