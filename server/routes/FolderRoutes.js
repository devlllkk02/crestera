const express = require('express');
const router = express.Router();
// Model types
const Types = require('../utils/Types') 
// CRUD Service
const CRUD = require('../utils/CRUD')
//controller
const Folder = require('../models/Folder');
FolderController = require('../controllers/FolderController');

//router - /v1/crestera/folders/
// Create
router.post('/', (req, res) => CRUD.create(req.body, Types.FOLDER, res));

// Get All Folders when mother folder == null
router.get('/folderId', (req, res) => FolderController.getAll(req, res));

// Get All shared Folders 
router.get('/share', (req, res) => FolderController.getAllShare(req, res));

// Get All Folders when mother folder !== null
router.get('/folderId/:id', (req, res) => FolderController.getAllById(req, res));

//router - /v1/crestera/folders/id
// Update
router.put('/', (req, res) => CRUD.updateById(req.body._id, req.body,  Types.FOLDER, res));

// Get by id
router.get('/:id', (req, res) =>  FolderController.getById(req, res));

// Delete
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id,  Types.FOLDER, res));

//add member
router.put('/member', (req, res) => FolderController.addMember(req, res));
router.put('/member/remove', (req, res) =>  FolderController.removeMember(req, res));

//add circle
router.put('/circle', (req, res) => FolderController.addCircle(req, res));

// Get by id
router.get('/share/member/:id', (req, res) =>  FolderController.getAllMember(req, res));

module.exports=router;

//get users not added to a folder
router.get('/folder/:folderId', FolderController.getUsersNotAddedToFolder);
module.exports = router;