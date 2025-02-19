import React, { useEffect, useState } from "react";
import Layout from "../../componenets/Layout";
import BlogCard from "./componenets/BlogCard";
import axios from "axios";
import { baseUrl } from "../../componenets/Baseurl";

const Home = () => {
  const [blog, setBlog] = useState([]);
  const fetchBlog = async () => {
    const response = await axios.get(`${baseUrl}blog`);
    setBlog(response.data.data);
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <>
      <Layout>
        <div className=" mt-5 justify-center flex flex-wrap space-x-3">
          {blog.map((blog, idx) => {
            return <BlogCard blog={blog} key={idx} />;
          })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
