// import React from "react"

const Banner = () => {
  return (
    <div className="space-y-4 p-8">
      {/* Title */}
      <h1 className="text-black text-7xl">A Warm Welcome!</h1>
      {/* Paragraph */}
      <p className="text-gray-500 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non
        facere quos harum, ad numquam incidunt cumque molestiae accusamus quidem
        eveniet soluta repellat voluptates vel ipsam aliquam vero sit. Optio
        voluptatum quae provident nostrum soluta iste officia nam. Esse maxime
        perspiciatis, debitis earum quaerat ullam placeat consectetur illum
        autem deserunt.
      </p>
      {/* Button */}
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Call to action!
      </button>
    </div>
  )
}

export default Banner
