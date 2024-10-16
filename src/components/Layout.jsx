import React from 'react'
import NavTop from '../components/navber/NavTop'
import NavMain from '../components/navber/NavMain'
import { Outlet } from 'react-router-dom'
import Footerpage from '../pages/Footerpage'

const Layout = () => {
  return (
    <>
        <NavTop />
        <NavMain />
          <Outlet />
          <Footerpage/>
    </>
  )
}

export default Layout
