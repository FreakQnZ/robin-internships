import React from 'react'

const Lor = ({ list }) => {
  return (
    <ul className="menu bg-white-100 overflow-y-scroll h-full w-full rounded-box">
      <li>
        <h2 className="menu-title">Letters of Recommendation</h2>
        <ul>
        {Array.isArray(list) && list.length > 0 ? (
          list.map((letter, index) => (
            <li
              key={index}
              className="p-2 border-2 border-blue-300 rounded-full w-96 text-center hover:bg-blue-100 transition"
            >
              <a
                href={letter.lorLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Student LOR {index + 1}
              </a>
            </li>
          ))
        ) : (
          <p className="text-gray-500"></p>
        )}

        </ul>
      </li>
    </ul>
  )
}

export default Lor