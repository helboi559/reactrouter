import { Routes, Route } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import Blogs from './pages/blogs'
import Home from './pages/home'
import './App.css'
import AllBlogs from "./components/AllBlogs";
// import { blogPosts } from "./utils/sampleBlogs";
import SubmitBlog from "./pages/SubmitBlog";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

const endpoint = 'https://62c3045b876c4700f534ab9f.mockapi.io/'
function App() {
  const [limit,setLimit] = useState(9) 
  const [page,setPage] = useState(1) 
  const [blogPosts,setBlogPosts] = useState([])
  useEffect(()=> {
    async function apiData () {
      const getData = await fetch(`${endpoint}/blogs?limit=${limit}&page=${page}`)
      const resData = await getData.json()
      // console.log(resData)
      setBlogPosts(resData)
      return resData
    }
    apiData()
  },[limit,page])
  return (
    <div className="App">
     <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs"  element={<Blogs limit={limit} setLimit={setLimit} page={page} setPage={setPage}/>} >
          <Route path="/blogs/single-blog/:blogId" element={<BlogPost blogPosts={blogPosts}/>}/> 
          <Route index element={<AllBlogs blogPosts={blogPosts}/>}/> 
          <Route path='submit-blog' element={<SubmitBlog blogPosts={blogPosts}/>}/> 
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
