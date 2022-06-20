const express = require('express');
const router = express.Router();
// Model types
const Types = require('../utils/Types');
// CRUD Service
const CRUD = require('../utils/CRUD');
const UserCircle = require('../models/UserCircle');
//controller
const UserCircleController = require('../controllers/UserCircleController');

//router - /v1/crestera/circles/
// Create
router.post('/', UserCircleController.create);

//get all
router.route('/').get(UserCircleController.getAll);

// Get by id
// router.route('/:id').get(UserCircleController.getById);
router.get('/:id', (req, res) => CRUD.getById(req.params.id,  Types.FOLDER, res));

//router - /v1/crestera/circles/id
// Update
router.put('/', (req, res) =>
  CRUD.updateById(req.body._id, req.body, Types.USERCIRCLE, res)
);

//add member
router.put('/member', (req, res) => UserCircleController.addMember(req, res));

//remove member
router.put('/member/remove', (req, res) =>
  UserCircleController.removeMember(req, res)
);

//update member
router.patch('/member/update', (req, res) =>
  UserCircleController.updateMember(req, res)
);

//update pending
router.patch('/member/update/pending', (req, res) =>
  UserCircleController.updatePeding(req, res)
);

// Delete
router.delete('/:id', (req, res) =>
  CRUD.deleteById(req.params.id, Types.USERCIRCLE, res)
);


//get users not added to a user circle
router.get('/circle/:circleId', UserCircleController.getUsersNotAddedToUserCircle);
module.exports = router;

//get notification
router.route('/notification/:id').get(UserCircleController.getNotification);