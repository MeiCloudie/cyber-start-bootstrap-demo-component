// import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white text-center p-4">
      <p>
        Copyright © {new Date().getFullYear()}{" "}
        <a
          href="https://startbootstrap.com/previews/heroic-features"
          target="_blank"
          className="hover:text-blue-300"
        >
          Start BootStrap
        </a>{" "}
        - Truong Thuc Van (
        <a
          href="https://github.com/MeiCloudie"
          target="_blank"
          className="hover:text-blue-300"
        >
          MeiCloudie
        </a>
        )
      </p>
    </div>
  )
}

export default Footer
