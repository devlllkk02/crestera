const Note = require("../models/Note");

// const io = require("socket.io")(require("http"));
const socketIOConnect = () => {
  const io = require("socket.io")(8000, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    try {
      socket.on("get-document", async (noteId) => {
        const document = await Note.findById(noteId);
        socket.join(noteId);

        socket.emit("load-document", document.data);
        socket.on("send-changes", (delta) => {
          socket.broadcast.to(noteId).emit("receive-changes", delta);
        });

        socket.on("save-document", async (data) => {
          await Note.findByIdAndUpdate(noteId, { data });
        });
      });
    } catch (error) {
      console.log(error);
    }
  });
};

const getNote = (noteId) => {
  Note.findById(noteId)
    .then((result) => {
      console.log(result.data);
      return result;
    })
    .catch((error) => console.log(error));
};

module.exports = socketIOConnect;
