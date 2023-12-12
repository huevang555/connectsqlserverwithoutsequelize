const Connection = require('tedious').Connection;

const connection = new Connection({
    userName: 'ka',
    password: 'huevang',
    server: 'DESKTOP-M4G2AJL\\SQLEXPRESS', // Make sure to escape backslashes
    options: { encrypt: false }
});

connection.on('connect', (err) => {
    if (err) {
        console.log('error connecting', err);
    } else {
        console.log('connection successful');
    }
});

module.exports = connection;
