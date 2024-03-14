const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
let traineesFile = "./trainees.json";
// console.log(http);

http.createServer((req, res) => {
    if(req.url !== "/favicon.ico") {
        console.log(req.method);
        // console.log("Server has started");

        // for querystring
            // console.log(req.url);
            // let qry = url.parse(req.url, true).query;
            // console.log(qry.id);
            // console.log(qry.name);
            // res.write(`ID: ${qry.id}, Name: ${qry.name}`);
            // res.end();

        // form post (url-encoded)
            // let body = "";
            // req.on('data', (chunk) => {
            //     body += chunk.toString();
            // });
            // req.on('end', () => {
            //     // console.log(body);
            //     // console.log(qs.parse(body));
            //     let qry = qs.parse(body);
            //     console.log(qry.name);
            //     console.log(qry.age);
            //     res.write("Data Received: " + qry.name + " (" + qry.age + ")");
            //     res.end();
            // });
            
        // for POST (JSON)
            // let body = "";
            // req.on('data', (chunk) => {
            //     body += chunk.toString();
            // });
            // req.on('end', () => {
            //     // console.log(body);
            //     // console.log(qs.parse(body));
            //     let qry = JSON.parse(body);
            //     console.log(qry.company);
            //     console.log(qry.batch);
            //     res.write("Data Received: " + qry.company + " (" + qry.batch + ")");
            //     res.end();
            // });

        // for the Routes
            let method = req.method;
            switch(method) {
                case "GET":
                    if(req.url.indexOf("trainees/readTrainees") !== -1) {
                        let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
                        if(trainees.length > 0) {
                            res.write(JSON.stringify(trainees));
                            res.end();
                        } else {
                            res.write("No Trainees Found!");
                            res.end();
                        }
                    }
                    if(req.url.indexOf("trainees/readSpecificTrainee") !== -1) {
                        let qry = url.parse(req.url, true).query;
                        let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
                        const specificTrainee = trainees.filter(trainee => trainee.name === qry.name);
                        if(specificTrainee.length > 0) {
                            res.write(JSON.stringify(specificTrainee));
                            res.end();
                        } else {
                            res.write("No Trainees Found!");
                            res.end();
                        }
                    }
                    break;
                case "POST":
                    if(req.url.indexOf("trainees/createTrainee") !== -1) {
                        let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
                        let body = "";
                        req.on('data', (chunk) => {
                            body += chunk.toString();
                        });
                        req.on('end', () => {
                            let obj = JSON.parse(body);
                            const found = trainees.find((trainee) => trainee.name === obj.name);
                            if(found) {
                                res.write("Trainee already exists!");
                                res.end();
                            } else {
                                trainees.push(obj);
                                fs.writeFileSync(traineesFile, JSON.stringify(trainees));
                                res.write("Trainee created successfully!");
                                res.end();
                            }
                        });
                        
                    }
                    break;
                case "PUT":
                    if(req.url.indexOf("trainees/updateTrainee") !== -1) {
                        let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
                        let body = "";
                        req.on('data', (chunk) => {
                            body += chunk.toString();
                        });
                        req.on('end', () => {
                            let obj = JSON.parse(body);

                            trainees.map((e, i) => (trainees[i].name === obj.name) && (trainees[i] = obj));
                            // console.log(trainees);
                            fs.writeFileSync(traineesFile, JSON.stringify(trainees));
                            res.write("Trainee updated successfully!");
                            res.end();
                        });
                    }
                    break;
                case "DELETE":
                    if(req.url.indexOf("trainees/deleteTrainee") !== -1) {
                        let trainees = JSON.parse(fs.readFileSync(traineesFile, "utf8"));
                        let body = "";
                        req.on('data', (chunk) => {
                            body += chunk.toString();
                        });
                        req.on('end', () => {
                            let obj = JSON.parse(body);
                            const result = trainees.filter((trainee) => trainee.phone !== obj.phone);
                            if(result.length !== trainees.length) {
                                fs.writeFileSync(traineesFile, JSON.stringify(result));
                                res.write("Trainee deleted successfully!");
                                res.end();
                            } else {
                                res.write("No Trainees Found!");
                                res.end();
                            }
                        });
                    }
                    break;
                default:
                    res.write("NO ROUTES MATCHED!");
                    res.end();
            }
            // res.write(req.url + " " + req.method);
            // res.end();
    }
}).listen(4000, () => console.log("Server is listening at: 4000"));