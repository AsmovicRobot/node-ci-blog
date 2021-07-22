jest.setTimeout(180000);
const mongoose = require('mongoose');
require('../models/User');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, {
    useMongoClient: true,
}).then(() => console.log('DB Connection Successfull'))
    .catch((err) => {
        console.error(err);
    });;
