import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Header from '../Header/Header'
import Amenities from '../Amenities/Amenities'

function MainLayout() {
  return (
   <>
    <Navbar/>
    {/* <Header/> */}
    <Amenities />
    <main className='my-20 w-5/6 m-auto'>
        <Outlet />
    </main>
    <Footer/>
   </>
  )
}

export default MainLayout
