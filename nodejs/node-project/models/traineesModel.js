const mongoose = require('mongoose');
const { Schema } = mongoose;
const conn = require('../db');
conn.connection();

const TraineesSchema = new Schema({
    "name": String,
    "age": Number,
    "phone": Number,
    "email": String
});

const TraineesModel = mongoose.model("Trainee", TraineesSchema);

module.exports = TraineesModel;