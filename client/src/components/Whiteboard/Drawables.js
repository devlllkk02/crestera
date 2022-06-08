import React, {Component} from "react";
import {Arrow, Circle, Rect,Line, Stage, Layer} from 'react-konva';
import Pencil from "../../assets/images/Icons/pencil.png"
import ArrowIcon from "../../assets/images/Icons/arrow.png"
import CircleIcon from "../../assets/images/Icons/circle.png"
import EraserIcon from "../../assets/images/Icons/eraser.png"
import RectangleIcon from "../../assets/images/Icons/rectangle.png"
import "./Drawables.scss"

class Drawable{
    constructor(startx,starty){
        this.startx = startx;
        this.starty = starty;
    }
}
/*----------------------------------- Drawable classes ------------------------------*/

//Arrow drawable 
class ArrowDrawable extends Drawable{
    constructor(startx,starty){
        super(startx,starty);
        this.x = startx;
        this.y = starty;
    }
    //register movements of the mouse points
    recordMovement(x,y){
        this.x = x;
        this.y = y;
    }

    render(){
        //get cordinates for the arrow
        const points = [this.startx, this.starty ,this.x, this.y];
        // return konva arrow shape
        return <Arrow points={points} fill= "black" stroke="black" />
    }
}

//circle drawable 
class CircleDrawable extends Drawable{
    constructor(startx,starty){
        super(startx,starty);
        this.x = startx;
        this.y = starty;
    }
    render(){
    //get center points dx,dy
    const dx = this.startx - this.x;
    const dy = this.starty - this.y;
    // Equation of a  circle -> dx*dx + dy*dy = radius * radius
    const radius = Math.sqrt(dx * dx + dy * dy);
    // return konva circle shape
    return <Circle radius={radius} x={this.startx} y={this.starty} stroke="black" />
    }
}

//Rectangle drawable
class RectangleDrawable extends ArrowDrawable {
    constructor(startx, starty) {
      super(startx, starty);
      this.x = startx;
      this.y = starty;
    }
  
    render() {
      const recWidth = this.x - this.startx;
      const recHeight = this.y - this.starty;
      return (
        <Rect  x={this.startx} y={this.starty} width={recWidth} height={recHeight} stroke="black" />
      );
    }
  }

  //Pencil / Freepath drawable
    class FreePathDrawable extends Drawable {
    constructor(startx, starty) {
      super(startx, starty);
      this.points = [startx, starty];
    }
  
    registerMovement(x, y) {
      this.points = [...this.points, x, y];
    }
    render() {
      return <Line points={this.points} fill="black" stroke="black" />;
    }
  }

  // Eraser 
class Eraser extends Drawable{
    constructor(startx, starty) {
      super(startx, starty);
      this.points = [startx, starty];
    }
    registerMovement(x, y) {
      this.points = [...this.points, x, y];
    }
    render() {
      return <Line points={this.points} fill="white" stroke="white" tension = "10"/>;
    }
  }

  /*----------------------------Main Drawable Class ------------------------*/
class Drawables extends Component{
    constructor(props) {
        super(props);
        this.state = {
          drawables: [],
          newDrawable: [],
          newDrawableType: "FreePathDrawable"
        };
      }
    //   Create drawable classes
  getNewDrawableBasedOnType = (x, y, type) => {
    const drawableClasses = {
      FreePathDrawable,
      ArrowDrawable,
      CircleDrawable,
      RectangleDrawable,
      Eraser
    };
    return new drawableClasses[type](x, y);
  };
  //   handle mouse down event when pressing the tool buttons
  handleMouseDown = e => {
    const { newDrawable } = this.state;
    if (newDrawable.length === 0) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const newDrawable = this.getNewDrawableBasedOnType(
        x,
        y,
        this.state.newDrawableType
      );
      this.setState({
        newDrawable: [newDrawable]
      });
    }
  };
  //  handle mouse up event when user release mouse click and use it to draw things
  handleMouseUp = e => {
    const { newDrawable, drawables } = this.state;
    if (newDrawable.length === 1) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const drawableToAdd = newDrawable[0];
      drawableToAdd.registerMovement(x, y);
      drawables.push(drawableToAdd);
      this.setState({
        newDrawable: [],
        drawables
      });
    }
  };
  //   handle mouse move event when mouse pointer move over stage element
  handleMouseMove = e => {
    const { newDrawable } = this.state;
    if (newDrawable.length === 1) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const updatedNewDrawable = newDrawable[0];
      updatedNewDrawable.registerMovement(x, y);
      this.setState({
        newDrawable: [updatedNewDrawable]
      });
    }
  };
render(){
    const drawables = [...this.state.drawables, ...this.state.newDrawable];
    return(
    <div>
        <div className="whiteboard__container">
        <div className="toolbar">
      {/* ------------------------------------------Tool bar----------------------------------------------------------*/}
      {/* Arrow button*/}
        <button className="toolbar__btn"
          onClick={e => { this.setState({ newDrawableType: "ArrowDrawable" }); }}
        >
         <img src={ArrowIcon} width={20} alt="arrow" className="toolbar-icon-img"/>
        </button>
         {/* Circle button */}
        <button className="toolbar__btn"
          onClick={e => { this.setState({ newDrawableType: "CircleDrawable" });}}
        >
         <img src={CircleIcon} width={20} alt="circle" className="toolbar-icon-img"/>
        </button>
         {/* Pencil button*/}
        <button className="toolbar__btn"
          onClick={e => {
            this.setState({ newDrawableType: "FreePathDrawable" });
          }}
        >
            <img src={Pencil} width={20} alt="pencil" className="toolbar-icon-img"/>
        </button>
         {/* Eraser button*/}
        <button className="toolbar__btn"
          onClick={e => {
            this.setState({ newDrawableType: "Eraser" });
          }}
        >
            <img src={EraserIcon} width={20} alt="eraser" className="toolbar-icon-img"/>
        </button>
        {/* Rectangle button */}
        <button className="toolbar__btn"
          onClick={e => {
            this.setState({ newDrawableType: "RectangleDrawable" });
          }}
        >
            <img src={RectangleIcon} width={20} alt="rectangle" className="toolbar-icon-img"/>
        </button>
        </div>
       
       {/* ------------------------------------------  Drawing area -------------------------------------------*/}
        <Stage
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
          width={window.innerWidth}
          height={window.innerHeight}
          className="canvas-stage"
        >
          <Layer className="canvas-layer">
            {drawables.map(drawable => {
              return drawable.render();
            })}
          </Layer>
        </Stage>
        </div>
      </div>);
}
}

function Canvas() {
  return (
    <div><Drawables /></div>
  )
}
export default Canvas;