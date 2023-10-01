import React from 'react'
import { Outlet } from 'react-router'
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

const LandingPageLayout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default LandingPageLayout
