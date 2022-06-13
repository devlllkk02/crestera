import React from 'react'
import "../Whiteboard.scss"
function Canvas() {
  return (
    <div className="canvasField">
    <canvas id="canvas"  width={window.innerWidth}/>
</div>
  )
}

export default Canvas