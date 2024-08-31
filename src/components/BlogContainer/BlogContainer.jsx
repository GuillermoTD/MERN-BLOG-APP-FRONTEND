import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import "./BlogContainer.css"

const BlogContainer = () => {
  return (
    <div className=" BlogContainer min-h-[90vh] mx-[5%] relative top-[5rem]">
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
};

export default BlogContainer;
