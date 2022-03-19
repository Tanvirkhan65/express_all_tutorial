const express = require('express');
const message = require('../controller/message.controller');

const messageRouter = express.Router();

messageRouter.get('/', message.getAllMessages);
messageRouter.get('/:id', message.getAllMessagesByUserId);
messageRouter.post('/', message.createMessage);
module.exports = messageRouter;
