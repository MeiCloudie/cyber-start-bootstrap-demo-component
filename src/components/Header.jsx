// import React from 'react'

const Header = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container flex justify-between">
        {/* Brand name */}
        <a href="#" className="text-white font-bold text-xl">
          Start Bootstrap
        </a>
        {/* Navigation */}
        <ul className="flex text-gray-400 space-x-8">
          <li className="text-white">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
