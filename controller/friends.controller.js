const friends = require('../models/friends.model');

const getAllFriends = (req, res) => {
    if (friends.length === 0) {
        res.status(404).send('No friends found');
    } else {
        res.send(friends);
    }
};
const getFriendById = (req, res) => {
    const { id } = req.params;
    const friend = friends.find((f) => f.id === +id);
    if (!friend) {
        res.status(404).send('Friend not found');
    }
    res.send(friend);
};
const createFriend = (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        res.status(400).send('Name and age are required');
    }
    const friend = {
        id: friends.length + 1,
        name,
        age,
    };
    friends.push(friend);
    res.send(friend);
};
module.exports = {
    getAllFriends,
    getFriendById,
    createFriend,
};
