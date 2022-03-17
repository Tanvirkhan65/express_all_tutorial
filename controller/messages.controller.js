function homeMessage(req, res) {
    res.json({
        message: 'Welcome to the home page',
    });
}
module.exports = {
    homeMessage,
};
