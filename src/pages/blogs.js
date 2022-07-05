import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar';


const Blogs = (props) => {
  //destructure info from app.js
  const {limit,page,setLimit,setPage} = props
  return (
    <>
        <Navbar/>
        <h1>Blogs Page</h1>
        <label>limit</label>
        <input type="number" value={limit} onChange={(e) => {
          const value = e.target.value
          setLimit(Number(value))
        }}/>
        <label>page</label>
        <input type="number" value={page} onChange={(e) => {
          const value = e.target.value
          setPage(Number(value))
        }}/>
        
        <Outlet/>
    </>
    
  )
}


export default Blogs;