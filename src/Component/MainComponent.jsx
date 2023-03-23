import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function MainComponent() {
  return (
    <div className="container box">
      <div className="topbar d-flex">
        <div className="first block">
          <button type="button" className="first button">
            <i class="fa-solid fa-bold"></i>
          </button>
          <button type="button" className="second button">
            <i class="fa-solid fa-italic"></i>
          </button>
          <button type="button" className="third button">
            <i class="fa-solid fa-underline"></i>
          </button>
        </div>
        <div className="second block">
        <button type="button" className="fouth button">
        <i class="fa-sharp fa-solid fa-align-left"></i>
          </button>
          <button type="button" className="fiveth button">
            <i class="fa-solid fa-align-center"></i>
          </button>
          <button type="button" className="sixth button">
            <i class="fa-solid fa-align-right"></i>
          </button>
        </div>
      </div>
      <div className="contentbox">
        <textarea name="" id="" cols="173" rows="300" className="mt-5">
        </textarea>
      </div>
    </div>
  );
}

export default MainComponent;
