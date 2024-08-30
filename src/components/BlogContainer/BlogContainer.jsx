import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import "./BlogContainer.css"

const BlogContainer = () => {
  return (
    <div className=" p-4 BlogContainer min-h-[90vh]  mx-[10%] relative top-[5rem]">
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
