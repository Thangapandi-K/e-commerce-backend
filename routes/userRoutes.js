//create router
const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

// add routes
userRouter.get('/', userController.getData);

//export the router

module.exports = userRouter;