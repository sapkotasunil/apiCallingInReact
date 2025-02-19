import React, { useState } from "react";

const BlogForm = ({ type, submitBlogData }) => {
  const [blogData, setBlogData] = useState({
    category: "",
    description: "",
    title: "",
    subtitle: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBlogData(blogData);
  };

  return (
    <>
      <div className="h-screen w-screen justify-center items-center flex">
        <div className="w-4/6 h-4/6 border-2 border-black rounded bg-gray-200">
          <h1 className="text-6xl font-semibold">{type}</h1>
          <h1 className="text-6xl font-semibold">BLOG</h1>
          <form className="p-5" action="" onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-16">
              <input
                type="text"
                name="title"
                placeholder="Title*"
                required
                onChange={handleChange}
                className=" border-2 border-black rounded focus:bg-gray-100 h-8 w-80"
              />
              <input
                type="text"
                name="subtitle"
                placeholder="SubTitle*"
                required
                onChange={handleChange}
                className=" border-2 border-black rounded focus:bg-gray-100 h-8 w-80"
              />
              <input
                type="file"
                name="image"
                required
                onChange={handleChange}
                placeholder="Title*"
                className=" border-2 border-black rounded focus:bg-gray-100 h-8 w-80"
              />
              <input
                type="text"
                name="category"
                required
                onChange={handleChange}
                placeholder="Category*"
                className=" border-2 border-black rounded focus:bg-gray-100 h-8 w-80"
              />
            </div>
            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              required
              placeholder="description*"
              className=" border-2 border-black rounded focus:bg-gray-100 h-28 w-2/3 mt-6"
            />
            <br />
            <button
              type="submit"
              className=" bg-gray-200 border-2 border-gray-400 px-5 mt-5  rounded text-black  "
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
