"use client";

import React , {useState} from 'react';
import Link from 'next/link';

const IsActiveApplicantsCard = ({ applicants , listingId }) => {
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

  async function rejectAcceptedStudent(index) {
    const object = {student_id : applicants[index]?.student_id, student_name : applicants[index]?.student_name, student_college : applicants[index]?.student_college, student_email : applicants[index]?.student_email, student_phoneNumber : applicants[index]?.student_phoneNumber, listingId : listingId};
    const result = await fetch(`/api/rejectAcceptedStudent`, {
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
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 overflow-y-scroll">
      {applicants.map((applicant, index) => (
        !hiddenCards.includes(index) && (
        <div key={index} className="card w-72 sm:w-60 xl:w-72 bg-base-100 shadow-xl m-2">
          <div className="card-body">
            <h2 className="card-title">{applicant.student_name}</h2> 
            <p>{applicant.student_college}</p>
            <p>{applicant.student_email}</p>
            <p>{applicant.student_phoneNumber}</p>

            <div className="card-actions justify-between">
             <button className="btn bg-red-200" onClick={()=>rejectAcceptedStudent(index)}>Terminate</button>
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

export default IsActiveApplicantsCard;
