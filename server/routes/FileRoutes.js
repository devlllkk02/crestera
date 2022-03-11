const express = require('express');
const router = express.Router();

//controller
fileController = require('../controllers/fileController');

//router - /v1/crestera/files/
//create
router.route('/').post(fileController.createNew);

//get all
router.route('/').get(fileController.getAll);

//router - /v1/crestera/files/id
//update by id
router.route('/:id').put(fileController.updateById);

//delete by id
router.route('/:id').delete(fileController.deleteById);



module.exports=router;