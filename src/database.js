const mongoose = require('mongoose');

const name = process.env.DB_NAME;
const address = process.env.DB_ADDRESS;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

let server = `mongodb://${address}:${port}/${name}`;
if (user && password) {
    server = `mongodb://${user}:${password}@${address}:${port}/${name}`;
}

mongoose.connect(server, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);

const DB = mongoose.connection;

DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', () => console.log('DB connected'));

module.exports = DB;