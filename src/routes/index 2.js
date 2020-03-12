const path = require('path');
const express = require('express');

module.exports = (app) => {
    app.use("/api", require('./api'));

    // static assets
    app.use(express.static(path.join(__dirname, '../client/build')))

    // anything that doesn't match is probably a client route
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));

}