
import { Routes, Route, Link } from "react-router-dom";
import Blogs from './pages/blogs'
import Home from './pages/home'


function App() {
  return (
    <div className="App">
     <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
