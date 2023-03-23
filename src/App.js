import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link","image","video"]
    ],
  };
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 editor">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor-section"
            modules={modules}
          />
        </div>
        <div className="col-md-6 preview preview-section" dangerouslySetInnerHTML={{__html:value}} />
      </div>
    </div>
  );
}

export default App;
