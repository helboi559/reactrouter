import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar';
// import BlogPost from '../components/BlogPost';
// import { blogPosts } from '../utils/sampleBlogs';

const Blogs = () => {
  return (
    <>
        <Navbar/>
        <h1>Blogs Page</h1>
        <h2>Contains "outlet" showing path parameter</h2>
        
        <Outlet/>
    </>
    
  )
}


export default Blogs;