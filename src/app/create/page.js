"use client";

import React, { useState } from "react";
import EditorText from "../../components/EditorText/EditorText";
import { Editor } from "primereact/editor";
const CreateBlog = () => {
  const [text, setText] = useState();

  return (
    <div className="w-full min-h-[97vh] pt-[10rem] flex flex-col justify-center items-center">
      <div className="w-[50%]">
        <Editor
          value={text}
          onTextChange={(e) => setText(e.htmlValue)}
          style={{ height: "320px", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default CreateBlog;
