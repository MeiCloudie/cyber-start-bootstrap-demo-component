// import React from 'react'

import Banner from "./Banner"
import Item from "./Item"

const Body = () => {
  return (
    <div className="mb-auto container">
      <Banner />
      <div>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Body
