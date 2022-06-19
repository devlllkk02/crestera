//Imports
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const http = require("http");
const socketIOConnect = require("./config/socket");
const cloudinary = require("cloudinary");
const AdmZip = require("adm-zip");
const PORT = process.env.PORT || 5000;
const {
  CLOUDINARY_API_CLOUD,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = require("./keys/keys");

const Note = require("./models/Note");
const Board = require("./models/Board");

//Initialising Express Application
const app = express();
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Creating Server
const server = http.createServer(app);

//Connecting to MongoDB
connectDB();

//Connecting to Socket.io
// socketIOConnect();

//connecting to cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_API_CLOUD,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

//Modles
require("./models/User");
require("./models/Note");
require("./models/Board");

//Routes
app.use(require("./routes/AuthRoutes"));
app.use(require("./routes/NoteRoutes"));
app.use(require("./routes/BoardRoutes"));
app.use(require("./routes/MainDashboardRoutes"));

//? User Routes
app.use("/v1/crestera/users", require("./routes/UserRoutes"));
//? UserCircle Routes
app.use("/v1/crestera/circles", require("./routes/UserCircleRoutes"));
//? Board Routes
app.use("/v1/crestera/boards", require("./routes/BoardRoutes"));
//? note Routes
app.use("/v1/crestera/notes", require("./routes/NoteRoutes"));
//? Folder Routes
app.use("/v1/crestera/folders", require("./routes/FolderRoutes"));
//? File Routes
app.use("/v1/crestera/files", require("./routes/FileRoutes"));

//Deploy to Heroku
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Socket
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  try {
    //? Note
    //Getting Note
    socket.on("get-document", async (noteId) => {
      const document = await Note.findById(noteId).populate({
        path: "onlineUsers.user",
      });
      socket.join(noteId);

      socket.emit("load-document", document);
    });

    // Updating Note
    socket.on("send-changes", (noteId, delta) => {
      socket.join(noteId);
      socket.broadcast.to(noteId).emit("receive-changes", delta);
    });

    //Saving Note
    socket.on("save-document", async (noteId, data) => {
      socket.join(noteId);
      await Note.findByIdAndUpdate(noteId, {
        data: data,
      });
    });

    //? User | Note
    //Getting User
    socket.on("get-noteIdAndUser", async (noteId, user) => {
      //Updating Online Users
      // console.log("Connected: " + socket.id);
      const result = await Note.findByIdAndUpdate(
        noteId,
        {
          $push: { onlineUsers: { user: user, socketId: socket.id } },
        },
        { new: true }
      ).populate({
        path: "onlineUsers.user",
      });

      io.to(noteId).emit("receive-note-OnlineUsers", result.onlineUsers);

      //Disconnected User
      socket.on("disconnect", async () => {
        // console.log("Disconnected: " + socket.id);
        const result = await Note.findByIdAndUpdate(
          noteId,
          {
            $pull: { onlineUsers: { user: user, socketId: socket.id } },
          },
          { new: true }
        ).populate({
          path: "onlineUsers.user",
        });

        io.to(noteId).emit("receive-note-OnlineUsers", result.onlineUsers);
      });
    });

    //!----------------------------//

    //?Board
    //Getting Board
    socket.on("get-board", async (boardId) => {
      const board = await Board.findById(boardId).populate({
        path: "onlineUsers.user",
      });
      socket.join(boardId);
      socket.emit("load-board", board);
    });

    //Saving Board
    socket.on("save-board", async (boardId, data) => {
      socket.join(boardId);

      const newBoard = await Board.findByIdAndUpdate(
        boardId,
        {
          data: data,
        },
        { new: true }
      );
    });

    //Updating Board
    socket.on("send-board-changes", (boardId, data) => {
      socket.join(boardId);
      socket.broadcast.to(boardId).emit("receive-board-changes", data);
    });

    //? User | Board
    //Getting User
    socket.on("get-boardIdAndUser", async (boardId, user) => {
      //Updating Online Users
      // console.log("Connected: " + socket.id);
      const result = await Board.findByIdAndUpdate(
        boardId,
        {
          $push: { onlineUsers: { user: user, socketId: socket.id } },
        },
        { new: true }
      ).populate({
        path: "onlineUsers.user",
      });

      io.to(boardId).emit("receive-board-OnlineUsers", result.onlineUsers);

      //Disconnected User
      socket.on("disconnect", async () => {
        // console.log("Disconnected: " + socket.id);
        const result = await Board.findByIdAndUpdate(
          boardId,
          {
            $pull: { onlineUsers: { user: user, socketId: socket.id } },
          },
          { new: true }
        ).populate({
          path: "onlineUsers.user",
        });

        io.to(boardId).emit("receive-board-OnlineUsers", result.onlineUsers);
      });
    });
  } catch (error) {
    console.log(error);
  }
});

//Listening
server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

module.exports = { server };
