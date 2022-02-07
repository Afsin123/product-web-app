import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
   const [activeTab, setActiveTab] = useState("Home");
   const location = useLocation();
   useEffect(() => {
      if (location.pathname === "/") {
         setActiveTab("Home")
      }
      else if (location.pathname === "/add") {
         setActiveTab("AddProduct")
      }
      else if (location.pathname === "/about") {
         setActiveTab("About")
      }
      else if (location.pathname === "/view") {
         setActiveTab("View")
      }
      else if (location.pathname === "/update/:id") {
         setActiveTab("AddProduct")
      }
      
   }, [location]);

   return (
      <div className='header'>
         <p className='logo'> PRODUCT APP </p>
         <div className='header-right'>
            <Link to= "/">
               <p className={`${activeTab === "Home"? "active" : ""}`} 
               onClick={()=> setActiveTab("Home")}
               > Home </p>
            </Link>

            <Link to= "/add">
               <p className={`${activeTab === "AddProduct"? "active" : ""}`} 
               onClick={()=> setActiveTab("AddProduct")}
               > Add Product </p>
            </Link>
            

            <Link to= "/about">
               <p className={`${activeTab === "About"? "active" : ""}`} 
               onClick={()=> setActiveTab("About")}
               > About </p>
            </Link>
            <Link to= "/view">
               <p className={`${activeTab === "View"? "active" : ""}`} 
               onClick={()=> setActiveTab("View")}
               > View List </p>
            </Link>
            <Link to= "/update/:id">
               <p className={`${activeTab === "AddProduct"? "active" : ""}`} 
               onClick={()=> setActiveTab("AddProduct")}
               > </p>
            </Link>
         
         </div>
         
      </div>
   )
}

export default Header
