const friends = require('./models/friends.model');

function getAllFriend(req, res) {
    if (friends.length > 0 && friends) {
        res.json(friends);
    } else {
        res.json({
            message: 'No friends found',
        });
    }
}
function getIndividualFriend(req, res) {
    const { id } = req.params;
    const friend = friends.find((f) => f.id === +id);
    if (friend) {
        res.json(friend);
    } else {
        res.json({
            id: 'No id found',
        });
    }
}
function addFriend(req, res) {
    const { name, age } = req.body;
    if (!name || !age) {
        res.json({
            message: 'Please provide name and age',
        });
    }
    const newFriend = {
        id: friends.length + 1,
        name,
        age,
    };
    friends.push(newFriend);
    res.json(newFriend);
}
module.exports = {
    getAllFriend,
    getIndividualFriend,
    addFriend,
};
