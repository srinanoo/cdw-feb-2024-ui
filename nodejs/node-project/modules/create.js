const fs = require('fs');
let traineesFile = "./trainees.json";

function createTrainee() {
    try {
        let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
        let obj = {
            "name": "Name3",
            "age": 20,
            "phone": 1234567890,
            "email": "john@gmail.com"
        }
        const found = trainees.find((trainee) => trainee.name === obj.name);
        if(found) {
            console.log("Trainee already exists!");
        } else {
            trainees.push(obj);
            fs.writeFileSync(traineesFile, JSON.stringify(trainees));
            console.log("Trainee created successfully!");
        }
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    createTrainee,
};