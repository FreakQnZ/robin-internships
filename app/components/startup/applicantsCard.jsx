"use client";

import React , {useState} from 'react';
import Link from 'next/link';

const ApplicantsCard = ({ applications, listingId }) => {
  const [hiddenCards, setHiddenCards] = useState([]);

  // Filter for pending applicants
  const applicants = applications.filter(app => app.status === 'PENDING');

  const hideCard = (index) => {
    setHiddenCards([...hiddenCards, index]);
  };

  if (!Array.isArray(applicants) || applicants.length === 0) {
    return (
      <div className="card w-72 sm:w-60 xl:w-72 bg-base-100 shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title">No applicants</h2>
        </div>
      </div>
    );
  }
  
  async function acceptStudent(index) {
    const object = {
      student_id: applicants[index]?.student_id,
      listingId: listingId
    };
    const result = await fetch(`/api/acceptStudent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    });
    hideCard(index);
    return result.json();
  }

  async function rejectStudent(index) {
    const object = {
      student_id: applicants[index]?.student_id,
      listingId: listingId
    };
    const result = await fetch(`/api/rejectStudent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    });
    hideCard(index);
    return result.json();
  }

  return (
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 overflow-y-scroll">
      {applicants.map((applicant, index) => (
        !hiddenCards.includes(index) && (
        <div key={index} className="card w-72 sm:w-60 xl:w-72 bg-base-100 shadow-xl m-2">
          <div className="card-body">
            <h2 className="card-title">{applicant.student_name}</h2> 
            <p>{applicant.student_college}</p>
            <p>{applicant.student_email}</p>
            <p>{applicant.student_phone}</p>
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
    </div>
  );
};

export default ApplicantsCard;
