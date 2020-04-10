const mongoose = require('mongoose');

const name = process.env.DB_NAME;
const address = process.env.DB_ADDRESS;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const protocol = process.env.DB_PROTOCOL;

let server = `${protocol}://${address}:${port}/${name}`;

if (user && password) {
    if (protocol !== 'mongodb') {
        server = `${protocol}://${user}:${password}@${address}/${name}`;
    } else {
        server = `${protocol}://${user}:${password}@${address}:${port}/${name}`;
    }
}

const MONGODB_URI =  process.env.NODE_ENV === 'local' ?
    `mongodb://${address}:${port}/CEN4010` :
    'mongodb+srv://Group1User:CEN4010@cen4010-group1-cluster-dcfnb.mongodb.net/CEN4010?retryWrites=true&w=majority'
const DB = mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected',() => {
    console.log('Mongoose is connected!');
});

mongoose.set('useCreateIndex', true);

/*const DB = mongoose.connection;

DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', () => console.log('DB connected'));
*/
module.exports = DB;