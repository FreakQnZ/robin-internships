"use client";

import React from 'react';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import Stats from '@/app/components/startup/statsSt';
import ListingsCard from '@/app/components/startup/listingsCard';
import Link from 'next/link';

const StudentDB = async ({ params }) => {
  const user = params.viewStartupId;

  async function getListings() {
    const result = await fetch(`${process.env.API_HOST}/getListingsForStartup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user }),
      cache: 'no-store',
    });
    return result.json();
  }

  async function getAboutUs() {
    const res = await fetch(`${process.env.API_HOST}/getAboutUs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user }),
      cache: 'no-store',
    });
    return res.json();
  }

  async function getName() {
    const res = await fetch(`${process.env.API_HOST}/getStartupName`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user }),
      cache: 'no-store',
    });
    return res.json();
  }

  async function getImage() {
    const res = await fetch(`${process.env.API_HOST}/getStartupImg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user }),
      cache: 'no-store',
    });
    return res.json();
  }

  const retDataAbout = await getAboutUs();
  const listings = await getListings();
  const retDataName = await getName();
  const retDataImg = await getImage();

  return (
    <div className="h-dvh w-full flex">
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-4 items-center justify-start w-full m-2 ml-10 mt-3">
          <div className="w-20 h-20 overflow-hidden rounded-full">
            <Image
              src={retDataImg?.data || '/default.jpg'}
              alt="startup"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          <p className="text-2xl font-bold">{retDataName?.data || 'Startup'}</p>
        </div>

        <div className="w-full grid h-5/6 grid-cols-6 gap-2">
          <div className="overflow-y-scroll col-span-2 bg-[#c3f2cb] ml-5 m-2 rounded-box">
            <p className="font-bold text-xl p-4">About the startup</p>
            <p className="p-5 text-lg">{retDataAbout?.data || 'No info available'}</p>
          </div>

          <div className="col-span-4 bg-base-300 m-2 mr-5 rounded-box">
            <p className="font-bold text-xl p-4">Current Openings</p>
            <ListingsCard listings={Array.isArray(listings?.data) ? listings.data : []} />
          </div>

          <div className="col-span-3 bg-[#c8edfd] ml-5 m-2 rounded-box">
            <p className="font-bold text-xl p-4">Project Directory (Recent Roles)</p>
            {/* Add content here */}
          </div>

          <div className="col-span-3 bg-base-300 m-2 mr-5 rounded-box flex flex-col justify-evenly h-full">
            <div className="m-2 flex justify-center">
              <Stats />
            </div>
            <div className="m-2 flex justify-center">
              <button className="btn w-3/4 h-24 text-3xl bg-sky-400 hover:bg-sky-300" onClick={() => {
                document.getElementById('modal')?.style.setProperty('display', 'block');
              }}>
                More About Us
              </button>
            </div>
          </div>

          <div id="modal" className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal-content bg-white p-5 rounded-lg">
              <span className="close cursor-pointer text-xl absolute top-2 right-4" onClick={() => {
                document.getElementById('modal').style.display = 'none';
              }}>
                &times;
              </span>
              <div className="flex gap-4 justify-center items-center mt-4">
                <Link href="#"><Image src="/instaLogo.png" width={60} height={60} alt="Instagram" /></Link>
                <Link href="#"><Image src="/linkedinLogo.webp" width={60} height={60} alt="LinkedIn" /></Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentDB;
