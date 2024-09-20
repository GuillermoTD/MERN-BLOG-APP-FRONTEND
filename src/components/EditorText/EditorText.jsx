import { useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import axios from "axios";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const EditorText = () => {

  const [text, setText] = useState("");

  const handleInput = (value)=>{
    setText(value)
    console.log(text)
  }

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios.post('http://localhost:3000/posts/new')
      .then(response => {
        setData(response.data)
        console.log(data)
      })
      .catch(error => console.error(error));
  });


  return (
    <div className="w-full">
      <Editor
        value={text}
        onTextChange={(e) => handleInput(e.htmlValue)}
        className="h-[340px] min-min-[950px]"
      />
    </div>
  );
};

export default EditorText;
