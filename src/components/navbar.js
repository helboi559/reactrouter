import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/blogs'>Blogs</Link>
    </nav>
    
  )
}

export default Navbar