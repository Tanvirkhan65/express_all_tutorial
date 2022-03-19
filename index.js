const express = require('express');
const friendsRouter = require('./routers/friends.router');
const messageRouter = require('./routers/message.router');

const port = process.env.PORT || 3000;
const app = express();
app.use((req, res, next) => {
    const now = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    console.log(`${Date.now() - now}ms`);
});
app.use(express.json());
app.get('/', (req, res) => {
    res.send('home routes');
});
app.use('/friends', friendsRouter);
app.use('/message', messageRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
