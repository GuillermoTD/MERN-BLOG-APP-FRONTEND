import { useState } from "react";
import { Editor } from "primereact/editor";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditorText = () => {
  const [text, setText] = useState("");
  return (
    <div className="w-full">
      <Editor
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
        className="h-[340px] min-min-[950px]"
      />
    </div>
  );
};

export default EditorText;
