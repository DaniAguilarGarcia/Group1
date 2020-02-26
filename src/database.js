const mongoose = require('mongoose');

const name = process.env.DB_NAME;
const address = process.env.DB_ADDRESS;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const protocol = process.env.DB_PROTOCOL;

let server = `${protocol}://${address}:${port}/${name}`;

if (user && password) {
    server = `${protocol}://${user}:${password}@${address}:${port}/${name}`;
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