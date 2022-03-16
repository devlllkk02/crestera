const express = require('express');
const router = express.Router();
// Model types
const Types = require('../utils/Types') 
// CRUD Service
const CRUD = require('../utils/CRUD')


//router - /v1/crestera/users/
// Create
router.post('/', (req, res) => CRUD.create(req.body, Types.USER, res));

//get all
router.get('/', (req, res) => CRUD.getByQuery({}, Types.USER, res));

//router - /v1/crestera/users/id
// Update
router.put('/', (req, res) => CRUD.updateById(req.body.id, req.body,  Types.USER, res));

// Get by id
router.get('/:id', (req, res) => CRUD.getById(req.params.id,  Types.USER, res));

// Delete
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id,  Types.USER, res));


module.exports=router;