import { Routes, Route } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import Blogs from './pages/blogs'
import Home from './pages/home'
import './App.css'
import AllBlogs from "./components/AllBlogs";
import { blogPosts } from "./utils/sampleBlogs";
import SubmitBlog from "./pages/SubmitBlog";

function App() {
  return (
    <div className="App">
     <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} >
          <Route path="/blogs/single-blog/:blogId" element={<BlogPost blogPosts={blogPosts}/>}/> 
          <Route index element={<AllBlogs blogPosts={blogPosts}/>}/> 
          <Route path='submit-blog' element={<SubmitBlog blogPosts={blogPosts}/>}/> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
