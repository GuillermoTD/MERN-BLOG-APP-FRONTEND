"use client";
import { useState, useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";
import "./BlogContainer.css";

const BlogContainer = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch("https://dummyjson.com/posts");
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const fetchedPosts = await response.json();
  //       console.log(fetchedPosts);
  //       setPosts(fetchedPosts.posts);
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <div className=" min-h-[90vh] mx-[5%] relative top-[5rem] border border-red-500">
      {/* {posts?.map(()=>(<BlogItem/>))} */}
      <BlogItem />
    </div>
  );
};

export default BlogContainer;
