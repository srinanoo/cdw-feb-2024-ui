const fs = require('fs');
let traineesFile = "./trainees.json";


const trainee = (req, res) => {
    res.json({"data": "", "msg": "Trainee Route!", "error": ""});
}

const trainer = (req, res) => {
    res.json({"data": "", "msg": "Trainer Route!", "error": ""});
}

const batches = (req, res) => {
    res.json({"data": "", "msg": "Batches Route!", "error": ""});
}

module.exports = {
    trainee,
    trainer,
    batches
}