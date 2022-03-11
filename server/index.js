// this will find and all the .env  file in root folder
require('dotenv').config();

//express
const express = require('express');
const app = express();

//cors for handeling ports
const cors = require("cors");

//connect to db
const connectDB = require('./config/db');
connectDB();

//middleware
app.use(express.json());
app.use(cors());

//routes
//folderroutes
app.use('/v1/crestera/folders', require('./routes/FolderRoutes'));
//fileroutes
app.use('/v1/crestera/files', require('./routes/FileRoutes'));

//set port
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));