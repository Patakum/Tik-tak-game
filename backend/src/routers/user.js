const userController = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);

module.exports = router;