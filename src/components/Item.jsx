// import React from 'react'

const Item = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      {/* Image */}
      <img
        className="rounded-t-lg"
        src="../../public/banner-cybersoft-course.png"
        alt=""
      />
      {/* Card Content */}
      <div className="p-4 text-center">
        {/* Title */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Card Title
        </h5>
        {/* Paragraph */}
        <p className="mb-3 font-normal text-gray-700 text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          facere tenetur architecto, facilis beatae dolore fugiat doloribus eos
          accusantium optio!
        </p>
        {/* Separation line */}
        <hr className="my-2" />
        {/* Button */}
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 m-2 focus:outline-none"
        >
          Find Out More!
        </button>
      </div>
    </div>
  )
}

export default Item
