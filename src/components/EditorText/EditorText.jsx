import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const EditorText = () => {
  const [value, setValue] = useState('');

    return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};

export default EditorText;
