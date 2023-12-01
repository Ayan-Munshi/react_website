import Header from "./components/Header";
import Footer from "./components/ Footer";
import { Outlet } from "react-router-dom";
import React from 'react'

function Layout_outlet() {     
  return (
    <>
                      
     <Header/>
     <Outlet/>                   {/* header and footer will be still{constant} in every page only out will change , we can put many/child pages under outlet which is define at the main.jsx */}                   
     <Footer/>                   {/* and header and footer will be constant that is also because of outlet */}
   
    </>
  )
}

export default Layout_outlet


