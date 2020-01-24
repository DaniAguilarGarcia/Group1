module.exports = (app) => {
    app.use("/backend", require('./backend'));
}