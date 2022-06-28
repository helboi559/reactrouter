import React from 'react'
import { Link , Outlet } from "react-router-dom";
import Navbar from '../components/navbar';
// import BlogPost from '../components/BlogPost';
// import { blogPosts } from '../utils/sampleBlogs';

const Blogs = () => {
  return (
    <>
        <Navbar/>
        <h1>Blogs Page</h1>
       
        
        <Outlet/>
    </>
    
  )
}


export default Blogs;