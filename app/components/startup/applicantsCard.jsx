"use client";

import React , {useState} from 'react';
import Link from 'next/link';
import { get } from 'mongoose';

const ApplicantsCard = ({ applicants , listingId }) => {
  const [hiddenCards, setHiddenCards] = useState([]);

  const hideCard = (index) => {
    setHiddenCards([...hiddenCards, index]);
  };

  if (applicants.length === 0) {
    return (
      <div className="card w-72 sm:w-60 xl:w-72 bg-base-100 shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title">No applicants</h2>
        </div>
      </div>
    );
  }
  async function acceptStudent(index) {
    // console.log(applicants[index])
    const object = {student_id : applicants[index]?.student_id, student_name : applicants[index]?.student_name, student_college : applicants[index]?.student_college, student_email : applicants[index]?.student_email, student_phoneNumber : applicants[index]?.student_phoneNumber, listingId : listingId};

    const result = await fetch(`/api/acceptStudent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    }, { cache: 'no-store' });
    console.log(result)
    hideCard(index);
    return result.json();
  }

  async function rejectStudent(index) {
    const object = {student_id : applicants[index]?.student_id, student_name : applicants[index]?.student_name, student_college : applicants[index]?.student_college, student_email : applicants[index]?.student_email, student_phoneNumber : applicants[index]?.student_phoneNumber, listingId : listingId};
    const result = await fetch(`/api/rejectStudent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    }, { cache: 'no-store' });
    console.log(result)
    hideCard(index);
    return result.json();
  }

  return (
    <>
      {applicants.map((applicant, index) => (
        !hiddenCards.includes(index) && (
        <div key={index} className="card w-72 sm:w-60 xl:w-72 bg-base-100 shadow-xl m-2">
          <div className="card-body">
            <h2 className="card-title">{applicant.student_name}</h2> 
            <p>{applicant.student_college}</p>
            <p>{applicant.student_email}</p>
            <p>{applicant.student_phoneNumber}</p>
            {/* <a className=" link">View CV</a> */}
            <div className="card-actions justify-between">
              <button className="btn btn-success" onClick={() => acceptStudent(index)}>Accept</button>
              <button className="btn bg-red-200" onClick={()=>rejectStudent(index)}>Reject</button>
            </div>
            <Link href={`/startupDashboard/${applicant.student_id}`} target="_blank">
             <button className="btn btn-secondary-content w-full">View</button>
            </Link>

          </div>
        </div> 
        )
      ))}
    </>
  );
};

export default ApplicantsCard;
