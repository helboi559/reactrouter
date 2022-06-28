import { Routes, Route, Link } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import Blogs from './pages/blogs'
import Home from './pages/home'
import './App.css'

function App() {
  return (
    <div className="App">
     <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} >
          <Route path=":blogId" element={<BlogPost/>}/> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
