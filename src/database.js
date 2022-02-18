const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/mern-tasks';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

//mongoose.connect('mongodb://localhost/webstore');

module.exports = mongoose;