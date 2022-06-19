const Note = require("../models/Note");
const Board = require("../models/Board");

const socketIOConnect = (socket) => {
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
};

module.exports = socketIOConnect;
