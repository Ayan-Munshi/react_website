import React from 'react'                                 // 6:30:00 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout_outlet from './layout_outlet.jsx'
import Home from './components/home.jsx'

import Contact_us from './components/Contact_us.jsx'
import About_us from './components/About_us.jsx'
import User_id from './components/User_id.jsx'







const router = createBrowserRouter([{
    
  path : '/' ,  element : <Layout_outlet/>,      // this line is to link the the url with layout_outlet section section where we are rendering outlet,header,footer

  children: [{
    path : "home" , element : <Home/>          // path means what url will show us or what we can write in url  after the destination of the url will be element
  } ,
  {
    path : "contact" , element : <Contact_us/>
  },
  {
    path : "about" , element : <About_us/>
  },
  {
    path : "user/:information" , element : <User_id/> //
  }]

}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider    router={router}/>       {/* // we created router above to pass the router in routerprovider   here the router will be rendered  */}
  </React.StrictMode>
)
