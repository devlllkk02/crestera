//Imports
const express = require('express');
const cors = require("cors");
const connectDB = require('./config/db');
const PORT = process.env.PORT


//Initialising Express Application
const app = express();
app.use(express.json());
app.use(cors());

//Connecting to MongoDB
connectDB();

//Routes

//? Folder Routes
app.use('/v1/crestera/folders', require('./routes/FolderRoutes'));
//? File Routes
app.use('/v1/crestera/files', require('./routes/FileRoutes'));

//Listening
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));