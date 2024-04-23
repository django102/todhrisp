const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');


router

.post("/user/create", UserController.create)
.post("/user/login", UserController.login)


module.exports = router;