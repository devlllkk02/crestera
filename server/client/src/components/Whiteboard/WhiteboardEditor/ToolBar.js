import React, { useEffect, useState, useContext } from "react";
//import tool icons 
import {
  paintbrush,
  eraser,
  dustbin,
  square,
  triangle,
  circle,
  selecthand,
  text,
  downloadIcon,
} from "../../../assets/images/Whiteboard/Icons/whiteboardIcons";

import "../Whiteboard.scss";

//import packages
import { fabric } from "fabric";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import Taskbar from "../../Note/TaskBar/Taskbar";
let canvas;

const colors = {
  blue: "#5DADE2",
  red: "#E74C3C",
  yellow: "#F1C40F",
  green: "#239B56",
  lightBlack: "#17202A",
  black: "#000",
  white: " #FFFFFF",
};

function ToolBar() {
  const {state, dispatch} = useContext(UserContext);
  const {boardId} =useParams();
  const [ brushSize, setBrushSize] =useState(5);
  const [brushColor, setBrushColor] =useState(colors.blue);
  const [eraserSize,setEraserSize]=useState(10);
  const [ strokeColor,setStrokeColor] = useState(colors.black);
  
  const [fileName, setFileName] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const [canvasJSON, setcanvasJSON] = useState();
  const [socket, setSocket] = useState();
  

  //Web Socket
  useEffect(()=>{
    const s = io("/");
    setSocket(s);
    return () => {
      s.disconnect();
    };
  },[]);

  //Initializing Blank Canvas
  useEffect(() => {
    canvas = new fabric.Canvas("canvas");
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.color = brushColor;
    canvas.setHeight(window.innerHeight - 100);
    canvas.setWidth(window.innerWidth - 50);
    canvas.freeDrawingBrush.width = brushSize;
    
    //setcanvas data into a JSON
    canvas.on("mouse:up",()=>{
      setcanvasJSON(JSON.stringify(canvas));
    });

  }, []);

  //Get and Load Board
  useEffect(() => {
    if (socket == null) return;
    socket.once("load-board", (board) => {
      canvas.loadFromJSON(board.data, canvas.renderAll.bind(canvas));
      setcanvasJSON(board.data);
      setFileName(board.fileName);
    });
    socket.emit("get-board", boardId);
    return () => {};
  }, [socket]);

  //Save Board
  useEffect(() => {
    canvas.on("mouse:up", () => {
      if (socket == null) return;
      // console.log("board saved");
      setcanvasJSON(JSON.stringify(canvas));
      socket.emit("save-board", boardId, JSON.stringify(canvas));
    });
  }, [socket, canvasJSON]);

  //Send Board Changes
  useEffect(() => {
    if (socket == null || canvasJSON == null) return;
    // console.log("changes send");
    socket.emit("send-board-changes", boardId, JSON.stringify(canvas));
  }, [socket, canvasJSON]);

  //Receive Board Chanages
  useEffect(() => {
    if (socket == null || canvasJSON == null) return;

    socket.on("receive-board-changes", (data) => {
      // console.log("changes received");
      setcanvasJSON(data);
      canvas.loadFromJSON(JSON.parse(data), canvas.renderAll.bind(canvas));
    });
  }, [socket, canvasJSON]);

  //? User
  useEffect(() => {
    if (socket == null || state == null) return;
    if (state) {
      socket.emit("get-boardIdAndUser", boardId, state);
    }
  }, [socket, state]);

  useEffect(() => {
    if (socket == null || onlineUsers == null) return;
    socket.on("receive-board-OnlineUsers", (result) => {
      setOnlineUsers(result);
    });

    return () => {
      socket.off("receive-note-OnlineUsers", (result) => {
        setOnlineUsers(result);
      });
    };
  }, [socket, onlineUsers]);

  //*Tools
  useEffect(() => {
    canvas.freeDrawingBrush.width = brushSize;
  }, [brushSize]);

  useEffect(() => {
    canvas.freeDrawingBrush.color = brushColor;
  }, [brushColor]);

  useEffect(() => {
    canvas.freeDrawingBrush.width = eraserSize;
  }, [eraserSize]);

  //function to change brush size
  const handleBrushSizeChange = (e) => {
    setBrushSize(e.target.value);
  };

  //functions to generate different shapes
  //Draw square
  const generateSquare = (e) => {
    console.log("rectangle");
    const rect = new fabric.Rect({
      left: 400,
      top: 100,
      fill: "transparent",
      width: 60,
      height: 60,
      angle: 90,
      stroke: strokeColor,
      strokeWidth: 2,
    });
    canvas.add(rect);
    canvas.renderAll();
  };
  //draw triangle
  const generateTriangle = (e) => {
    console.log("rectangle");
    const trian = new fabric.Triangle({
      left: 200,
      top: 150,
      fill: "transparent",
      width: 60,
      height: 60,
      stroke: strokeColor,
      strokeWidth: 2,
    });
    canvas.add(trian);
    canvas.renderAll();
  };
  //Draw Circle
  const generateCircle = (e) => {
    console.log("rectangle");
    const crcl = new fabric.Circle({
      left: 100,
      top: 100,
      radius: 50,
      stroke: strokeColor,
      strokeWidth: 2,
      fill: "transparent",
    });
    canvas.add(crcl);
    canvas.renderAll();
  };

  // function to clear canvas or delete the selected shapes
  const deleteObjects = () => {
    const activeObjects = canvas.getActiveObjects();

    if (activeObjects.length === 0) {
      canvas.clear();
      setcanvasJSON(JSON.stringify(canvas));
      socket.emit("save-board", boardId, JSON.stringify(canvas));

      return;
    } else if (activeObjects.length) {
      activeObjects.forEach((object) => {
        canvas.remove(object);
      });
      setcanvasJSON(JSON.stringify(canvas));
      socket.emit("save-board", boardId, JSON.stringify(canvas));
    }
  };

  const addTextInput = () => {
    const textInput = new fabric.Textbox("Enter Text", {
      left: 100,
      top: 100,
      fontFamily: "ubuntu",
      width: 30,
      height: 40,
    });
    canvas.add(textInput);
    canvas.isDrawingMode = false;
  };
  //function to download the canvas content as jpeg
  const download = () => {
    var dataURL = canvas.toDataURL({
      format: "png",
      quality: 1,
    });
    const imageLink = document.createElement("a");
    if (typeof imageLink.download === "string") {
      imageLink.href = dataURL;
      imageLink.download = "canvas.png";
      document.body.appendChild(imageLink);
      imageLink.click();
      document.body.removeChild(imageLink);
    } else {
      window.open(dataURL);
    }
  };
  return (
    <>
      <Taskbar
        fileName={fileName}
        onlineUsers={onlineUsers}
        fileType="board"
        id={boardId}
      />
      <div className="toolSection">
        <div className="toolField">
          <div className="brushWidth">
            <div className="icon">
              <img
                src={paintbrush}
                alt="paintbrush-icon"
                className="paintBrushIcon"
                onClick={() => {
                  setBrushColor(colors.blue);
                  canvas.isDrawingMode = true;
                }}
              />
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="5"
              value={brushSize}
              className="slider"
              onChange={handleBrushSizeChange}
            ></input>
          </div>

          <div className="colorsets">
            <div
              className="blue"
              style={{ background: colors.blue }}
              onClick={() => {
                setBrushColor(colors.blue);
                setStrokeColor(colors.blue);
              }}
            ></div>
            <div
              className="red "
              style={{ background: colors.red }}
              onClick={() => {
                setBrushColor(colors.red);
                setStrokeColor(colors.red);
              }}
            ></div>
            <div
              className="yellow "
              style={{ background: colors.yellow }}
              onClick={() => {
                setBrushColor(colors.yellow);
                setStrokeColor(colors.yellow);
              }}
            ></div>
            <div
              className="green "
              style={{ background: colors.green }}
              onClick={() => {
                setBrushColor(colors.green);
                setStrokeColor(colors.green);
              }}
            ></div>
            <div
              className="black "
              style={{ background: colors.black }}
              onClick={() => {
                setBrushColor(colors.black);
                setStrokeColor(colors.black);
              }}
            ></div>
          </div>

          <div className="eraser">
            <div className="icon eraserDesc">
              <img
                src={eraser}
                alt="eraser-icon"
                className="eraserIcon"
                onClick={(e) => {
                  setBrushColor(colors.white);
                }}
              />
            </div>
            <input
              type="range"
              min="1"
              max="100"
              step="10"
              value={eraserSize}
              className="slider"
              onChange={(e) => setEraserSize(e.target.value)}
            ></input>
          </div>

          <div className="deleteField">
            <div className="icon" onClick={deleteObjects}>
              <img src={dustbin} alt="delete-icon" className="deleteBtn" />
            </div>
          </div>

          <div className="selectionHand">
            <div
              className="icon"
              onClick={() => (canvas.isDrawingMode = false)}
            >
              <img
                src={selecthand}
                alt="select-icon"
                className="selecthandBtn"
              />
            </div>
          </div>

          <div className="textInput">
            <div className="icon">
              <img
                src={text}
                alt="textInput-icon"
                className="textInputBtn"
                onClick={addTextInput}
              />
            </div>
          </div>

          <div className="shapesMenuField">
            <div className="icon square">
              <img
                src={square}
                alt="square-icon"
                className="squareShape"
                onClick={(e) => generateSquare(e)}
              />
            </div>
            <div className="icon">
              <img
                src={triangle}
                alt="triangle-icon"
                className="triangleShape"
                onClick={(e) => generateTriangle(e)}
              />
            </div>
            <div className="icon">
              <img
                src={circle}
                alt="circle-icon"
                className="circleShape"
                onClick={(e) => generateCircle(e)}
              />
            </div>
          </div>

          <div className="download">
            <div className="icon">
              <img
                src={downloadIcon}
                alt="download-icon"
                className="downloadBtn"
                onClick={download}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToolBar;
