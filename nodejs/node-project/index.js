// const os = require('os');
// console.log(os);
// console.log(os.platform());

const fs = require('fs');
// console.log(fs);

// Create a File using Sync
// fs.writeFileSync("sample.txt", "Updated content goes here...");
// console.log("File has been created");

// Create a File using Async
// console.log(1);
// fs.writeFile("sample1.text", "First Content", (err) => {
//     if(err) console.log(err);
//     else console.log("File has been created");;
// });
// console.log(3);

// Read a File using Sync
// let data = fs.readFileSync("sample.txt", "utf8");
// console.log(data);

// Read a File using Async
// fs.readFile("sample1.text", "utf8", (err, data) => {
//     if(err) console.log(err);
//     else console.log(data);
// })

// Append a File using Sync
// fs.appendFileSync("sample.txt", " Added to the end of the file");

// Append a File using Async
// fs.appendFile("sample1.text", " new content", (err) => {
//     if(err) console.log(err);
//     else console.log("File has been updated.");
// })

// Delete a File using Sync
// fs.unlinkSync("sample.txt");

// Delete a File using Async
// fs.unlinkSync("sample1.text", (err) => {
//     if(err) console.log(err);
//     else console.log("File has been deleted");
// });

let traineesFile = "./trainees.json";

// function createTrainee() {
//     try {
//         let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
//         let obj = {
//             "name": "Name3",
//             "age": 20,
//             "phone": 1234567890,
//             "email": "john@gmail.com"
//         }
//         const found = trainees.find((trainee) => trainee.name === obj.name);
//         if(found) {
//             console.log("Trainee already exists!");
//         } else {
//             trainees.push(obj);
//             fs.writeFileSync(traineesFile, JSON.stringify(trainees));
//             console.log("Trainee created successfully!");
//         }
//     } catch (err) {
//         console.log(err.message);
//     }
// }
// createTrainee();

// function readTrainees() {
//     let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
//     if(trainees.length > 0) {
//         console.log(trainees)
//     } else {
//         console.log("No Trainees Found!");
//     }
// }
// // readTrainees();

// function readSpecificTrainee(phone) {
//     let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
//     const specificTrainee = trainees.filter(trainee => parseInt(trainee.phone) === parseInt(phone));
//     if(specificTrainee.length > 0) {
//         console.log(specificTrainee)
//     } else {
//         console.log("No Trainees Found!");
//     }
// }
// // readSpecificTrainee(1234567890);

// function updateTrainee() {
//     let obj = {
//         "name": "JOHN",
//         "age": 50,
//         "phone": 1111111111,
//         "email": "john@gmail.com"
//     }

//     let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
//     console.log(trainees);
//     // trainees.forEach((trainee,i) => {
//     //     if(trainees[i].email === obj.email) {
//     //         for(let key in trainee) {
//     //             if(trainees[i][key] !== obj[key]) {
//     //                 trainees[i][key] = obj[key];
//     //             }
//     //         }
//     //     }
//     // });

//     // for(let i = 0; i<trainees.length; i++) {
//     //     if(trainees[i].email === obj.email) {
//     //         for(let key in trainees[i]) {
//     //             if(trainees[i][key] !== obj[key]) {
//     //                 trainees[i][key] = obj[key];
//     //             }
//     //         }
//     //     }
//     // }
//     // console.log(trainees);

//     // const updatedTrainees = trainees.map(element => {
//     //     if(element.email === obj.email) {
//     //         return {...element, ...obj}
//     //     }
//     //     return {...element};
//     // });

//     trainees.map((e, i) => (trainees[i].email === obj.email) && (trainees[i] = obj));
//     // console.log(trainees);
//     fs.writeFileSync(traineesFile, JSON.stringify(trainees));
//     console.log("Trainee updated successfully!");
// }
// // updateTrainee();

// function deleteTrainee(phone) {
//     let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
//     // const index = trainees.findIndex((trainee) => trainee.phone === phone);
//     // trainees.splice(index, 1);

//     const result = trainees.filter((trainee) => trainee.phone !== phone);
//     // console.log(result.length);
//     // if(result.length > 0 && result.length <= trainees.length) {
//     if(result.length !== trainees.length) {
//         fs.writeFileSync(traineesFile, JSON.stringify(result));
//         console.log("Trainee deleted successfully!");
//     } else {
//         console.log("No Trainees Found!");
//     }
// }
// deleteTrainee("sdfsdf");
// /// 0 < 3
// /// 3 < 3
// /// 2 < 3
// /// 1 < 3


// MODULE WAY:


// const os = require('os');
// const traineeObj = require("./modules/create");
// traineeObj.createTrainee();
// traineeObj.testFuncion();

const {testFuncion} = require('./modules/create');
testFuncion();