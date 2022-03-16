const express = require('express');
const router = express.Router();
// Model types
const Types = require('../utils/Types') 
// CRUD Service
const CRUD = require('../utils/CRUD')


//router - /v1/crestera/notes/
// Create
router.post('/', (req, res) => CRUD.create(req.body, Types.NOTE, res));

//get all
router.get('/', (req, res) => CRUD.getByQuery({}, Types.NOTE, res));

//router - /v1/crestera/notes/id
// Update
router.put('/', (req, res) => CRUD.updateById(req.body._id, req.body,  Types.NOTE, res));

// Get by id
router.get('/:id', (req, res) => CRUD.getById(req.params.id,  Types.NOTE, res));

// Delete
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id,  Types.NOTE, res));


module.exports=router;