const fs = require('fs');
let traineesFile = "./trainees.json";
const crud = require('../services/crud');
const logger = require('../services/logger');

const TraineesModel = require('../models/traineesModel');

const readTrainees = (req, res) => {
    // let results = crud.read("trainees", {});
    // if(results.length > 0) {
    //     res.json({"data": results, "msg": "Found!", "error": ""});
    // } else {
    //     res.json({"data": "", "msg": `No ${col} Found!`, "error": ""});
    // }

    // try {
    //     const trainees = fs.readFileSync("traineesFile", "utf8");
    // } catch(err) {
    //     logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    //     res.json({"msg": "Error"});
    // }
    
    // try {
    //     const trainees = fs.readFileSync("traineesFile", "utf8");
    //     res.send("Test");
    // } catch (err) {
    //     // logger.errorLogger.error("error");
    //     // logger.infoLogger.info("information");
    //     logger.errorLogger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    //     res.send("Test");
    // }

    try {
        crud.read("trainees", {})
            .then(results => {
                console.log(results);
                if(results.length > 0) {
                    res.json({"data": results, "msg": "Found!", "error": ""});
                } else {
                    res.json({"data": "", "msg": `No Trainees Found!`, "error": ""});
                }
            });
    } catch(err) {
        logger.errorLogger.log("error", `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)

        // logger.infoLogger.log(`${req.originalUrl} - ${req.ip}`)

        // logger.warnLogger.log("warn", `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)

        res.json({"data": "", "msg": "", "error": "Unable to fetch Trainee data!"});
    }
}

const readSpecificTrainee = (req, res) => {
    // crud.read("trainees", req.query, res);
    try {
        crud.read("trainees", req.query)
            .then(results => {
                console.log(results);
                if(results.length > 0) {
                    res.json({"data": results, "msg": "Found!", "error": ""});
                } else {
                    res.json({"data": "", "msg": `No Trainees Found!`, "error": ""});
                }
            });
    } catch(err) {
        res.json({"data": "", "msg": "", "error": "Unable to fetch Trainee data!"});
    }
}

const createTrainee = async (req, res) => {
    
    try {
        // let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
        // const Trainees = new TraineesModel(obj);
        
        // let results = await Trainees.save();
        // console.log(results);
        // if(results) {
        //     res.json({"data": "", "msg": "Trainee created successfully!", "error": ""});
        // } else {
        //     
        // }
        // res.send("Success!");

        // const found = trainees.find((trainee) => trainee.name === obj.name);
        // if(found) {
        //     res.json({"data": "", "msg": "Trainee already exists!", "error": ""});
        // } else {
        //     trainees.push(obj);
        //     fs.writeFileSync(traineesFile, JSON.stringify(trainees));
        //     res.json({"data": "", "msg": "Trainee created successfully!", "error": ""});
        // }
        let obj = req.body;
        const traineesData = await TraineesModel.find({"email": obj.email});
        console.log(traineesData);
        if(traineesData.length > 0) {
            res.json({"data": "", "msg": "", "error": "Trainee already exists!"});
        } else {
            const Trainees = new TraineesModel(obj);
            await Trainees.save();
            res.json({"data": "", "msg": "Trainee created successfully!", "error": ""});
        }

    } catch (err) {
        res.json({"data": "", "msg": "", "error": "Unable to create trainee!"});
    }
    

    
}

const updateTrainee = (req, res) => {
    // let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
    let obj = req.body;
    // trainees.map((e, i) => (trainees[i].name === obj.name) && (trainees[i] = obj));
    // // console.log(trainees);
    // fs.writeFileSync(traineesFile, JSON.stringify(trainees));
    // res.json({"data": "", "msg": "Trainee updated successfully!", "error": ""});

    console.log(obj);

    TraineesModel.updateOne({"email": obj.email}, {$set: obj})
        .then(results => {
            console.log(results);
            if(results?.modifiedCount > 0) {
                res.json({"data": "", "msg": "Trainee updated successfully", "error": ""});
            } else {
                res.json({"data": "", "msg": "Trainee data is already upto date!", "error": ""});
            }
        })
}

const deleteTrainee = (req, res) => {
    // let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
    let obj = req.body;
    // const result = trainees.filter((trainee) => trainee.phone !== obj.phone);
    // if(result.length !== trainees.length) {
    //     fs.writeFileSync(traineesFile, JSON.stringify(result));
    //     res.json({"data": "", "msg": "Trainee deleted successfully!", "error": ""});
    // } else {
    //     res.json({"data": "", "msg": "No Trainees Found!", "error": ""});
    // }

    try {
        TraineesModel.deleteOne(obj)
            .then(results => {
                console.log(results);
                if(results?.deletedCount > 0) {
                    res.status(202).json({"data": "", "msg": "Trainee deleted successfully!", "error": ""});
                } else {
                    res.status(201).json({"data": "", "msg": "No Trainees Found!", "error": ""});
                }
            });
    } catch(err) {
        console.log(err);
        res.status(500).json({"data": "", "msg": "", "error": "Unable to Delete Trainee!"});
    }
}

module.exports = {
    readTrainees,
    readSpecificTrainee,
    createTrainee,
    updateTrainee,
    deleteTrainee
}