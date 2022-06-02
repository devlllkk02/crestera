import React, {Component} from "react";
import {Arrow} from 'react-konva';
class Drawable{
    constructor(startx,starty){
        this.startx = startx;
        this.starty = starty;
    }
}

//Arrow drawable class
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
        const points = [this.startx, this.starty ,this.x, this.y];
        return <Arrow points={points} fill= "black" stroke="black" />
    }
}
class Drawables extends Component{
render(){
    return;
}
}

export default Drawables;