const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB = process.env.MONGO_DB;

mongoose.connect(MONGO_DB)
    .then(() => {
        console.log(`Connecting to Mongo was successful .`);
    })
    .catch(err => {
        console.log(err?.message ?? `Connecting to Mongo was failed !`);
    });

