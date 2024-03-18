const fs = require('fs');
let traineesFile = "./trainees.json";
const crud = require('../services/crud');

const readTrainees = (req, res) => {
    // let results = crud.read("trainees", {});
    // if(results.length > 0) {
    //     res.json({"data": results, "msg": "Found!", "error": ""});
    // } else {
    //     res.json({"data": "", "msg": `No ${col} Found!`, "error": ""});
    // }

    crud.read("trainees", {})
        .then(results => {
            console.log(results);
            if(results.length > 0) {
                res.json({"data": results, "msg": "Found!", "error": ""});
            } else {
                res.json({"data": "", "msg": `No Trainees Found!`, "error": ""});
            }
        })
}

const readSpecificTrainee = (req, res) => {
    // crud.read("trainees", req.query, res);
    crud.read("trainees", req.query)
        .then(results => {
            console.log(results);
            if(results.length > 0) {
                res.json({"data": results, "msg": "Found!", "error": ""});
            } else {
                res.json({"data": "", "msg": `No Trainees Found!`, "error": ""});
            }
        })
}

const createTrainee = (req, res) => {
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
}

const updateTrainee = (req, res) => {
    let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
    let obj = req.body;
    trainees.map((e, i) => (trainees[i].name === obj.name) && (trainees[i] = obj));
    // console.log(trainees);
    fs.writeFileSync(traineesFile, JSON.stringify(trainees));
    res.json({"data": "", "msg": "Trainee updated successfully!", "error": ""});
}

const deleteTrainee = (req, res) => {
    let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
    let obj = req.body;
    const result = trainees.filter((trainee) => trainee.phone !== obj.phone);
    if(result.length !== trainees.length) {
        fs.writeFileSync(traineesFile, JSON.stringify(result));
        res.json({"data": "", "msg": "Trainee deleted successfully!", "error": ""});
    } else {
        res.json({"data": "", "msg": "No Trainees Found!", "error": ""});
    }
}

module.exports = {
    readTrainees,
    readSpecificTrainee,
    createTrainee,
    updateTrainee,
    deleteTrainee
}