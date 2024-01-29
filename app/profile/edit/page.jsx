"use client";

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import StudentNavbar from '@/app/components/student/studentNavbar';
import Image from 'next/image';
import logo from '../../utils/assets/Image.png'

const Page = () => {
  const { user } = useUser();
  const uId = user?.id;

  const [resume, setResume] = useState('');
  const [lor, setLor] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [showToast, setShowToast] = useState(false);


  async function addResume() {
    const result = await fetch(`${process.env.API_HOST}/addResume}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: uId, resume }),
    }, { cache: 'no-store' });
    handleToast();
    setResume('');
    return result.json();
  }

  async function addLor() {
    const result = await fetch(`${process.env.API_HOST}/addLor}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: uId, Lor: lor }),
    }, { cache: 'no-store' });
    handleToast();
    setLor('');
    return result.json();
  }

  async function addPortfolio() {
    const result = await fetch(`${process.env.API_HOST}/addPortfolio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: uId, portfolio }),
    }, { cache: 'no-store' });
    handleToast();
    setPortfolio('');
  }

  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className='h-dvh w-full flex'>
      <StudentNavbar act="utils"/>
      <div className=' h-full w-full flex'>
        <div className=' p-2 m-2 w-full grid grid-rows-3 grid-cols-3 gap-2'>

          <div className="card card-side bg-base-100 shadow-xl m-5 col-span-2 ">
            <figure><Image src={logo} width={200} height={200} alt="Movie"/></figure>
            <div className="card-body">
              <h2 className="card-title">Add / Update Resume</h2>
              <p>Drop a link to a pdf of your resume</p>
              <input onChange={(e) => setResume(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              <div className="card-actions justify-end">
                <button onClick={addResume} className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>

          <div className="card card-side bg-base-100 shadow-xl m-5 col-start-2 col-span-2">
            <div className="card-body">
              <h2 className="card-title">Add Lor</h2>
              <p>Add a link to a pdf of your Letter of Recommendation</p>
              <input onChange={(e) => setLor(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              <div className="card-actions justify-start mt-3">
                <button onClick={addLor} className="btn btn-primary">Submit</button>
              </div>
            </div>
            <figure><Image src={logo} width={200} height={200} alt="Movie"/></figure>
          </div>

          <div className="card card-side bg-base-100 shadow-xl m-5 col-span-2">
            <figure><Image src={logo} width={200} height={200} alt="Movie"/></figure>
            <div className="card-body">
              <h2 className="card-title">Add / Update Portfolio</h2>
              <p>Add a link to a pdf of your portfolio</p>
              <input type="text" onChange={(e) => setPortfolio(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              <div className="card-actions justify-end">
                <button onClick={addPortfolio} className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      {showToast && (
        <div className="toast">
          <div className="alert alert-info">
            <span>Changes Saved</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page;
