import React from "react";
import Layout from "../../componenets/Layout";
import BlogForm from "./componenets/BlogForm";

const EditBlog = () => {
  return (
    <Layout>
      <BlogForm type={"EDIT"} />
    </Layout>
  );
};

export default EditBlog;
