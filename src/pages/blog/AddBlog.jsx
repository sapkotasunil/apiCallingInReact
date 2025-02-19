import React from "react";
import Layout from "../../componenets/Layout";
import BlogForm from "./componenets/BlogForm";
import { baseUrl } from "../../componenets/Baseurl";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBlog = () => {
  const navigate = useNavigate();
  const blogAdd = async (blogData) => {
    console.log(blogData);
    try {
      const response = await axios.post(`${baseUrl}blog`, blogData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 201) {
        navigate("/");
      } else {
        console.log(" blog added failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <BlogForm type="ADD" submitBlogData={blogAdd} />
    </Layout>
  );
};

export default AddBlog;
