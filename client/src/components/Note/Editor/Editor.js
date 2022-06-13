import React, { useState, useEffect, useCallback } from "react";
import "./Editor.scss";

//Imports
import { updateNote } from "../Note/NoteAPI";

//Packages
import Quill from "quill";
import "quill/dist/quill.snow.css";
import io from "socket.io-client";
import { useParams } from "react-router-dom";

function Editor() {
  const { noteId } = useParams();

  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  const [keyUp, setKeyUp] = useState(false);

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

  //Get and Load Document
  useEffect(() => {
    if (socket == null || quill == null) return;
    socket.once("load-document", (document) => {
      quill.setContents(document);
      quill.enable();
    });

    socket.emit("get-document", noteId);
  }, [socket, quill, noteId]);

  //Save Changes
  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
      console.log(keyUp);
      if (keyUp == true) {
        socket.emit("save-document", quill.getContents());
        console.log("Updated Note");
      }
      setKeyUp(false);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [quill, socket, keyUp]);

  //Tracking Keyboard
  useEffect(() => {
    const keyEvent = window.addEventListener(
      "keydown",
      (e) => {
        setKeyUp(true);
      },
      true
    );

    return keyEvent;
  }, []);

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
    q.disable();
    // q.setText("Loading...");
    setQuill(q);
  }, []);

  return <div className="editor" ref={editorWrapperRef}></div>;
}

export default Editor;
