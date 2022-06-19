import React from "react";
import Navbar from "../../Navbar/Navbar";
import Editor from "../Editor/Editor";
import "./Note.scss";

function Note() {
  return (
    <div className="note">
      <Navbar />
      <Editor />
    </div>
  );
}

export default Note;
