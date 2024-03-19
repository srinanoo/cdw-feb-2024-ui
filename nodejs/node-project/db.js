const mongoose = require('mongoose');
require('dotenv').config();

const connection = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected Successfully!!!");
    } catch (err) {
        console.log(err);
    }
}

module.exports = {connection};