//Imports
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const socketIOConnect = require("./config/socket");
const cloudinary = require("cloudinary");
const PORT = process.env.PORT;

//Initialising Express Application
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: true,
}))

//Connecting to MongoDB
connectDB();

//Connecting to Socket.io
socketIOConnect();

//connecting to cloudinary
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_API_CLOUD,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,
})

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

//Listening
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
