const express = require('express');
const router = express.Router();

//controller
FolderController = require('../controllers/FolderController');

//router - /v1/crestera/folders/
//create
router.route('/').post(FolderController.createNew);

//get all
router.route('/').get(FolderController.getAll);

//router - /v1/crestera/folders/id
//update by id
router.route('/:id').put(FolderController.updateById);

//delete by id
router.route('/:id').delete(FolderController.deleteById);



module.exports=router;