//create router
const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const userRouter = express.Router();

// add routes
//userRouter.get('/', userController.getData);
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/logout', userController.logout);
userRouter.get('/profile', auth.verifyToken, userController.getProfile);


//export the router

module.exports = userRouter;