const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000;

const fs = require('fs');
let traineesFile = "./trainees.json";

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/v1/trainees/readTrainees', (req, res) => {
    let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
    if(trainees.length > 0) {
        res.json({"data": trainees, "msg": "Found!", "error": ""});
    } else {
        res.json({"data": "", "msg": "No Trainees Found!", "error": ""});
    }
});

app.get('/api/v1/trainees/readSpecificTrainee', (req, res) => {
    let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
    let qry = req.query;
    console.log(qry);
    const specificTrainee = trainees.filter(trainee => trainee.name === qry.name);
    if(specificTrainee.length > 0) {
        res.json({"data": specificTrainee, "msg": "Found!", "error": ""});
    } else {
        res.json({"data": "", "msg": "No Trainees Found!", "error": ""});
    }
});

app.post('/api/v1/trainees/createTrainee', (req, res) => {
    let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
    let obj = req.body;
    const found = trainees.find((trainee) => trainee.name === obj.name);
    if(found) {
        res.json({"data": "", "msg": "Trainee already exists!", "error": ""});
    } else {
        trainees.push(obj);
        fs.writeFileSync(traineesFile, JSON.stringify(trainees));
        res.json({"data": "", "msg": "Trainee created successfully!", "error": ""});
    }
});

app.put('/api/v1/trainees/updateTrainee', (req, res) => {
    let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
    let obj = req.body;
    trainees.map((e, i) => (trainees[i].name === obj.name) && (trainees[i] = obj));
    // console.log(trainees);
    fs.writeFileSync(traineesFile, JSON.stringify(trainees));
    res.json({"data": "", "msg": "Trainee updated successfully!", "error": ""});
});

app.delete('/api/v1/trainees/deleteTrainee', (req, res) => {
    let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
    let obj = req.body;
    const result = trainees.filter((trainee) => trainee.phone !== obj.phone);
    if(result.length !== trainees.length) {
        fs.writeFileSync(traineesFile, JSON.stringify(result));
        res.json({"data": "", "msg": "Trainee deleted successfully!", "error": ""});
    } else {
        res.json({"data": "", "msg": "No Trainees Found!", "error": ""});
    }
});


app.listen(port, () => console.log("Server listening to port: " + port));