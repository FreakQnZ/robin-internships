import React from 'react'

const ApplicantsCard = () => {
  return (
    <div className="card w-72 sm:w-60 xl:w-72 bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title">Applicant name</h2>
        <p>College name</p>
        <p>Email Id</p>
        <a className=" link">View CV</a>
        <div className="card-actions justify-between">
          <button className="btn btn-success">Accept</button>
          <button className="btn btn-secondary-content">Ignore</button>
        </div>
      </div>
    </div>
  )
}

export default ApplicantsCard