const express = require('express');
const router = express.Router();
// Model types
const Types = require('../utils/Types') 
// CRUD Service
const CRUD = require('../utils/CRUD')
//controller
fileController = require('../controllers/fileController');


//router - /v1/crestera/files/
// Create
router.post('/', (req, res) => CRUD.create(req.body, Types.FILE, res));

//get all
router.route('/').get(fileController.getAll);

//router - /v1/crestera/files/id
// Update
router.put('/', (req, res) => CRUD.updateById(req.body.id, req.body,  Types.FILE, res));

// Get by id
router.get('/:id', (req, res) => CRUD.getById(req.params.id,  Types.FILE, res));

// Delete
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id,  Types.FILE, res));


module.exports=router;