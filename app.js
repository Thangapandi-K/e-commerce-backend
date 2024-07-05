//import express
const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use('/api/v1', userRouter);


module.exports = app