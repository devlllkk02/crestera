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
    console.log("Socket Connected")
    try {
      //?Note
      socket.on("get-document", async (noteId, user) => {
        const document = await Note.findById(noteId).populate({
          path: "onlineUsers.user",
        });
        socket.join(noteId);

        //? Note
        //Getting Note
        socket.emit("load-document", document);

        // Updating Note
        socket.on("send-changes", (delta) => {
          socket.broadcast.to(noteId).emit("receive-changes", delta);
        });

        //Saving Note
        socket.on("save-document", async (data) => {
          await Note.findByIdAndUpdate(noteId, {
            data: data,
          });
          // console.log("updated");
        });

        //?User
        //Connect User
        socket.on("connect-user", async () => {
          console.log("heard");
          // await Note.findByIdAndUpdate(noteId, {
          //   $push: { onlineUsers: { user: user, socketId: socket.id } },
          // });
        });
      });
      //? User
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

        io.to(noteId).emit("receive-onlineUsers", result.onlineUsers);

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

          io.to(noteId).emit("receive-onlineUsers", result.onlineUsers);
        });
      });
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = socketIOConnect;
