// const io = require("socket.io")(require("http"));
const socketIOConnect = () => {
  const io = require("socket.io")(8000, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("send-changes", (delta) => {
      socket.broadcast.emit("receive-changes", delta);
    });
  });
};

module.exports = socketIOConnect;
