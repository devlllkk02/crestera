const express = require('express');
const router = express.Router();
// Model types
const Types = require('../utils/Types') 
// CRUD Service
const CRUD = require('../utils/CRUD');
const UserCircle = require('../models/UserCircle');
//controller
const UserCircleController = require('../controllers/UserCircleController')


//router - /v1/crestera/circles/
// Create
router.post('/', UserCircleController.create);

//get all
router.route('/').get(UserCircleController.getAll);

// Get by id
router.route('/:id').get(UserCircleController.getById);

//router - /v1/crestera/circles/id
// Update
router.put('/', (req, res) => CRUD.updateById(req.body._id, req.body,  Types.USERCIRCLE, res));

//add member
router.put('/member', (req, res) => UserCircleController.addMember(req, res));

//update member
router.patch('/member/update', (req, res) => UserCircleController.updateMember(req, res));

// Delete
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id,  Types.USERCIRCLE, res));


module.exports=router;