/* eslint-disable no-shadow */
const messages = require('../models/messages.model');

const getAllMessages = (req, res) => {
    if (messages.length === 0) {
        res.status(404).send('No messages found');
    } else {
        res.send(messages);
    }
};
const getAllMessagesByUserId = (req, res) => {
    const { id } = req.params;
    const message = messages.find((m) => m.id === +id);
    if (messages.length === 0) {
        res.status(404).send('No messages found');
    } else {
        res.send(message);
    }
};
const createMessage = (req, res) => {
    const { message } = req.body;
    if (!message) {
        res.status(400).send('Id and message are required');
    }
    const newMessage = {
        id: message.length + 1,
        message,
    };
    messages.push(newMessage);
    res.send(newMessage);
};
module.exports = {
    getAllMessages,
    getAllMessagesByUserId,
    createMessage,
};
