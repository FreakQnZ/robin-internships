import React from 'react';
import Link from 'next/link';

const ApplicantsCard = ({ applicants , listingId }) => {
  if (applicants.length === 0) {
    return (
      <div className="card w-72 sm:w-60 xl:w-72 bg-base-100 shadow-xl m-2">
        <div className="card-body">
          <h2 className="card-title">No applicants</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      {applicants.map((applicant, index) => (
        <div key={index} className="card w-72 sm:w-60 xl:w-72 bg-base-100 shadow-xl m-2">
          <div className="card-body">
            <h2 className="card-title">{applicant.student_name}</h2> 
            <p>{applicant.student_college}</p>
            <p>{applicant.student_email}</p>
            <p>{applicant.student_phoneNumber}</p>
            {/* <a className=" link">View CV</a> */}
            <div className="card-actions justify-between">
              <button className="btn btn-success">Accept</button>
              <button className="btn bg-red-200">Reject</button>
            </div>
            <Link href={`/startupDashboard/${applicant.student_id}`} target="_blank">
             <button className="btn btn-secondary-content w-full">View</button>
            </Link>

          </div>
        </div>
      ))}
    </>
  );
};

export default ApplicantsCard;
