const express = require('express');

const app = express();
app.param('id', (req, res, next, id) => {
    const user = {
        id,
        name: 'John Doe',
    };
    req.user = user;
    next();
});
app.get('/user/:id', (req, res) => {
    res.send(req.user);
});
app.route('/home')
    .get((req, res) => {
        res.send('Hello World! get');
    })
    .put((req, res) => {
        res.send('Hello World! put');
    })
    .post((req, res) => {
        res.send('Hello World! post');
    });

app.listen(3000, () => {
    console.log('listening on port 3000');
});
