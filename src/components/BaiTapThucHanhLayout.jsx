// import React from "react"

import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"

const BaiTapThucHanhLayout = () => {
  return (
    <div className="flex flex-col h-screen justify-between bg-gray-200">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default BaiTapThucHanhLayout
