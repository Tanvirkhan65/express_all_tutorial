const express = require('express');
const friends = require('../controller/friends.controller');

const friendRouter = express.Router();
friendRouter.get('/', friends.getAllFriends);
friendRouter.get('/:id', friends.getFriendById);
friendRouter.post('/', friends.createFriend);
module.exports = friendRouter;
