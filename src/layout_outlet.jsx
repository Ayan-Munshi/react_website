import Header from "./components/Header";
import Footer from "./components/ Footer";
import { Outlet } from "react-router-dom";
import React from 'react'

function Layout_outlet() {
  return (
    <>

     <Header/>
     <Outlet/>
     <Footer/>
   
    </>
  )
}

export default Layout_outlet


