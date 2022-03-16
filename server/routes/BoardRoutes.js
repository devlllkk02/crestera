const express = require('express');
const router = express.Router();
// Model types
const Types = require('../utils/Types') 
// CRUD Service
const CRUD = require('../utils/CRUD')


//router - /v1/crestera/boards/
// Create
router.post('/', (req, res) => CRUD.create(req.body, Types.BOARD, res));

//get all
router.get('/', (req, res) => CRUD.getByQuery({}, Types.BOARD, res));

//router - /v1/crestera/boards/id
// Update
router.put('/', (req, res) => CRUD.updateById(req.body._id, req.body,  Types.BOARD, res));

// Get by id
router.get('/:id', (req, res) => CRUD.getById(req.params.id,  Types.BOARD, res));

// Delete
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id,  Types.BOARD, res));


module.exports=router;