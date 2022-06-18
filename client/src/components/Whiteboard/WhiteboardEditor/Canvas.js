import React from "react";

import "../Whiteboard.scss";
function Canvas() {
  return (
    <div className="canvasField">
      <canvas
        id="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}

export default Canvas;
