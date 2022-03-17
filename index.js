const express = require('express');

const app = express();
const friends = [
    {
        id: 1,
        name: 'John',
        age: 30,
    },
    {
        id: 2,
        name: 'Jane',
        age: 25,
    },
    {
        id: 3,
        name: 'Bob',
        age: 20,
    },
];
app.use((req, res, next) => {
    const now = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const ms = Date.now() - now;
    console.log(`${req.method} ${req.url} - ${ms}ms`);
});
app.use(express.json());
app.post('/friends', (req, res) => {
    if (!req.body.name || !req.body.age) {
        return res.status(400).send('Invalid request');
    }
    const friend = req.body;
    friend.id = friends.length + 1;
    friends.push(friend);
    return res.json(friend);
});
app.get('/', (req, res) => {
    res.send('this is home page');
});
app.get('/friends', (req, res) => {
    res.json(friends);
});
app.get('/friends/:id', (req, res) => {
    const { id } = req.params;
    const friend = friends.find((f) => f.id === +id);
    if (!friend) {
        res.status(404).send('Not found');
    }
    res.json(friend);
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
