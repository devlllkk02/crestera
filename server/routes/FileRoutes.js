const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({})
let upload = multer({storage})

// Model types
const Types = require('../utils/Types') 
// CRUD Service
const CRUD = require('../utils/CRUD')
//controller
FileController = require('../controllers/FileController');


//router - /v1/crestera/files/
// Create
router.post('/',upload.single("myFile"), (req, res) => FileController.create(req, res));

// Get All Folders when mother folder !== null
router.get('/dwonload/:id', (req, res) => FileController.getByIdDownload(req, res));

// Get All Folders when mother folder == null
router.get('/fileId', (req, res) => FileController.getAll(req, res));

// Get All Folders when mother folder !== null
router.get('/fileId/:id', (req, res) => FileController.getAllByID(req, res));

//router - /v1/crestera/files/id
// Update
router.put('/', (req, res) => CRUD.updateById(req.body._id, req.body,  Types.FILE, res));

// Get by id
router.get('/:id', (req, res) => CRUD.getById(req.params.id,  Types.FILE, res));

// Delete
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id,  Types.FILE, res));


module.exports=router;