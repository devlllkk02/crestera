import React, {Component} from "react";
import {Arrow, Circle, Rect} from 'react-konva';
class Drawable{
    constructor(startx,starty){
        this.startx = startx;
        this.starty = starty;
    }
}

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


class Drawables extends Component{
render(){
    return;
}
}

export default Drawables;