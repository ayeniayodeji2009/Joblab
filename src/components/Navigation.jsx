import React from 'react'
import {BrowserRouter, Routes, Route, NavLink, useNavigate} from "react-router-dom";



//Checks for Current Nav
function currentPageNav(isActive){
  return isActive ? {color: 'white'} : {color: 'black'}
}

export default function Navigation(){
  return (
    <section class="nav_body">
          <NavLink  aria-current="page" to="/"><h1>Joblab</h1></NavLink> 
    <section className="nav_container">

     <nav class="nav nav-pills flex-column flex-sm-row">
       
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/">Home</NavLink> 
       
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link" to="/about">About</NavLink>
       
    <NavLink style={currentPageNav} className="flex-sm-fill text-sm-center nav-link" to="/contact">Contact</NavLink>
       
     </nav>
    </section>
    </section>
  )
}