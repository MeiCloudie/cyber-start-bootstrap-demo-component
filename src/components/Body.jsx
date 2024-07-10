// import React from 'react'

import Banner from "./Banner"
import Item from "./Item"

const Body = () => {
  return (
    <div className="mb-auto container">
      <Banner />
      <div className="grid grid-cols-4 gap-4 p-4">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Body
