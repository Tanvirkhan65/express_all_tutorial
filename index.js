const express = require('express');
const message = require('./controller/messages.controller');
const friend = require('./controller/friends.controller');

const app = express();

app.use((req, res, next) => {
    const now = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const ms = Date.now() - now;
    console.log(`${req.method} ${req.url} - ${ms}ms`);
});
app.use(express.json());
app.post('/friends', friend.addFriend);
app.get('/', message.homeMessage);
app.get('/friends', friend.getAllFriend);
app.get('/friends/:id', friend.getIndividualFriend);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
