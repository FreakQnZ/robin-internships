import React from 'react'

const Lor = ({ list }) => {
  return (
    <ul className="menu bg-base-200 overflow-y-scroll h-full w-full rounded-box">
      <li>
        <h2 className="menu-title">Letters of Recommendation</h2>
        <ul>
          {list.map((letter, index) => (
            <li className=' p-2' key={index}><a href={letter.lorLink} target='_blank'>Student LOR {index+1}</a></li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default Lor