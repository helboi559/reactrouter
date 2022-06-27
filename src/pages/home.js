import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <h1>Home Page</h1>

    </div>
  )
}

export default Home;