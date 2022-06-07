//Imports
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT;

//Initialising Express Application
const app = express();
app.use(express.json());
app.use(cors());

//Connecting to MongoDB
connectDB();

//Modles
require("./models/User");

//Routes
//?Auth Routes
app.use(require("./routes/AuthRoutes"));

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
