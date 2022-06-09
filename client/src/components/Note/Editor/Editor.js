import React, { useCallback } from "react";
import "./Editor.scss";

import Quill from "quill";
import "quill/dist/quill.snow.css";

function Editor() {
  const editorWrapperRef = useCallback((editorWrapper) => {
    if (editorWrapper == null) {
      return;
    }
    editorWrapper.innerHTML = "";

    const editor = document.createElement("div");
    editorWrapper.append(editor);
    new Quill(editor, { theme: "snow" });
  });

  return <div className="editor" ref={editorWrapperRef}></div>;
}

export default Editor;
