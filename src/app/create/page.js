"use client";

import React, { useState } from "react";
import EditorText from "../../components/EditorText/EditorText";
import { Editor } from "primereact/editor";
const CreateBlog = () => {
  const [text, setText] = useState();

  return (
    <div className="w-full min-h-[97vh] pt-[0.5rem] flex flex-col justify-center items-center">
      <div className="w-[80%] flex flex-col items-center justify-center">
        <h2 className="text-[2.5rem] mb-[2rem]">Write an awesome blog!</h2>
        <EditorText/>
      </div>
    </div>
  );
};

export default CreateBlog;
