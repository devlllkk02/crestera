const express = require("express");
const router = express.Router();

//controller
FolderController = require("../../controllers/vault/FolderController");

//router - /v1/computers/
//create
router.route("/").post(FolderController.createNew);

//get all
router.route("/").get(FolderController.getAll);

//router - /v1/computers/id
//update by id
router.route("/:id").put(FolderController.updateById);

//delete by id
router.route("/:id").delete(FolderController.deleteById);

module.exports = router;
