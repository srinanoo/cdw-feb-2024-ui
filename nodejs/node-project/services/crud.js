const fs = require('fs');
let traineesFile = "./trainees.json";
let trainersFile = "./trainers.json";
let classesFile = "./classes.json";
let batchesFile = "./batches.json";

const read = (col, param1) => {
    return new Promise(async (resolve, reject) => {
        let results = [];
        console.log({col});
        
        let model;
        
        switch (col) {
            case "trainees":
                model = require('../models/traineesModel');
                break;
            default:
                model = "";
        }
        model?.find(param1).sort({"_id":-1})
            .then((results) => {
                console.log(results);
                resolve(results);
            });

        // fs.readFile("./"+col+".json", "utf8", (err, data) => {
        //     if(err) reject(err);
        //     else {
        //         console.log(param1);
        //         if(JSON.stringify(param1).length>2) {
        //             let qry = param1;
        //             data = JSON.parse(data).filter(temp => temp.name === qry.name);
        //         }
        //         resolve(data);
        //     }
        // })
        // // switch(col) {
        // //     case "trainees":
        // //         results = await JSON.parse(fs.readFile(traineesFile, "utf8"));
        // //         break;
        // //     case "trainers":
        // //         results = JSON.parse(fs.readFileSync(trainersFile, "utf8"));
        // //         break;
        // //     case "classes":
        // //         results = JSON.parse(fs.readFileSync(classesFile, "utf8"));
        // //         break;
        // //     case "batches":
        // //         results = JSON.parse(fs.readFileSync(batchesFile, "utf8"));
        // //         break;
        // //     default:
        // //         results = [];
    
        // // }
        // if(JSON.stringify(data).length>2) {
        //     let qry = data;
        //     results = results.filter(temp => temp.name === qry.name);
        // }
        // resolve(results);
    })
    
}

const create = (col, data) => {

}

const update = (col, data) => {

}

const del = (col, data) => {

}

module.exports = {
    read,
    create,
    update,
    del
}