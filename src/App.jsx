import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ReadBlog from "./pages/blog/ReadBlog";
import EditBlog from "./pages/blog/EditBlog";
import AddBlog from "./pages/blog/AddBlog";
import Home from "./pages/blog/Home";
import Navbar from "./componenets/Navbar";
import BlogForm from "./pages/blog/componenets/BlogForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog/:read" element={<ReadBlog />} />
          <Route path="/blog/edit" element={<EditBlog />} />
          <Route path="/blog/add" element={<AddBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
