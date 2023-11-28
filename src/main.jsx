import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout_outlet from './layout_outlet.jsx'
import Home from './components/home.jsx'

import Contact_us from './components/Contact_us.jsx'





const router = createBrowserRouter([{
    
  path : '/' ,  element : <Layout_outlet/>,

  children: [{
    path : "home" , element : <Home/>
  } ,
  {
    path : "contact" , element : <Contact_us/>
  }]

}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider    router={router}/> 
  </React.StrictMode>
)
