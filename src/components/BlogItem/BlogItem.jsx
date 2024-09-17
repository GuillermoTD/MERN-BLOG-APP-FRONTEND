import React from "react";
import testImage from "../../../public/testImage.jpg";
import Image from "next/image";
import { Bookmark, ThumbsUp } from "lucide-react";
import Link from "next/link";

const BlogItem = (data) => {
  return (
    <div className="w-[500px] h-[200px] flex shadow-md ">
      <Link href="/detail" className="border-[4px] border-red-500 flex">
        <div className="h-full w-full ">
          <Image
            className="h-[100%] w-[100%] object-cover"
            src={testImage}
            alt="image-test"
          />
        </div>

        <div className="flex flex-col w-full p-[0.5rem] justify-between">
          <div>
            <span className="text-[0.78rem]">John Doe - 19 Agosto 2024</span>
            <h2>
              <strong>Lorem ipsum dolor sit amet</strong>
            </h2>
            <p className="mt-[1rem]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              tenetur cum soluta.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-[0.5rem]">
              <button>
                <Bookmark size={20} strokeWidth={0.9} />
              </button>
              <button>
                <ThumbsUp size={20} strokeWidth={0.9} />
              </button>
            </div>

            <div className="text-[0.8rem] flex gap-[1rem]">
              <span>Technology</span>
              <span>4 min read</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
