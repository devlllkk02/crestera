import React, { useState, useEffect, useCallback } from "react";
import "./Editor.scss";

import Quill from "quill";
import "quill/dist/quill.snow.css";
import io from "socket.io-client";

function Editor() {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();

  //Estblishing Web Socker
  useEffect(() => {
    const s = io("http://localhost:8000");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  //Quill Send Changes
  useEffect(() => {
    if (socket == null || quill == null) return;

    const handleQuill = (delta, oldDelta, source) => {
      if (source != "user") {
        return;
      }
      socket.emit("send-changes", delta);
    };

    quill.on("text-change", handleQuill);

    return () => {
      quill.off("text-change", handleQuill);
    };
  }, [socket, quill]);

  //Quill Recieve Changes
  useEffect(() => {
    if (socket == null || quill == null) return;

    const handleQuill = (delta) => {
      quill.updateContents(delta);
    };

    socket.on("receive-changes", handleQuill);
    return () => {
      socket.off("receive-changes", handleQuill);
    };
  }, [socket, quill]);

  const TOOLBAR_OPTIONS = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const editorWrapperRef = useCallback((editorWrapper) => {
    if (editorWrapper == null) {
      return;
    }
    editorWrapper.innerHTML = "";

    const editor = document.createElement("div");
    editorWrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    setQuill(q);
  }, []);

  return <div className="editor" ref={editorWrapperRef}></div>;
}

export default Editor;
