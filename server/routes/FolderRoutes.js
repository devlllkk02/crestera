const express = require('express');
const router = express.Router();
// Model types
const Types = require('../utils/Types') 
// CRUD Service
const CRUD = require('../utils/CRUD')
//controller
FolderController = require('../controllers/FolderController');

//router - /v1/crestera/folders/
// Create
router.post('/', (req, res) => CRUD.create(req.body, Types.FOLDER, res));

// Get All Folders when mother folder == null
router.get('/folderId', (req, res) => FolderController.getAll(req, res));

// Get All Folders when mother folder !== null
router.get('/folderId/:id', (req, res) => FolderController.getAllById(req, res));

//router - /v1/crestera/folders/id
// Update
router.put('/', (req, res) => CRUD.updateById(req.body._id, req.body,  Types.FOLDER, res));

// Get by id
router.get('/:id', (req, res) =>  FolderController.getByID(req, res));

// Delete
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id,  Types.FOLDER, res));



module.exports=router;