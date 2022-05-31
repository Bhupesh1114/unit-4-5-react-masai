const process = require('process');
const fs = require('fs');
const path = require('path');

let command = process.argv[2];
if (command === "append") {
    fs.appendFile(process.argv[4], process.argv[3], (error) => {
        if (error) {
           console.log(error);
        } else {
            console.log("Line Added");
       }
    });
} else if (command === "read") {
    fs.readFile(process.argv[3], {encoding : "utf8"}, (error,data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    });;
} else if (command === "delete") {
    fs.unlink(process.argv[3], (error) => {
        if (error) {
          console.log(error);
        } else {
            console.log( process.argv[3] , "file is deleted");
      }
  })
} else if (command === "create") {
    fs.writeFile(process.argv[3], "", (error) => {
        if (error) {
           console.log(error);
        } else {
            console.log("file created");
       }
   })
} else if (command === "rename") {
    fs.rename(process.argv[3], process.argv[4], (error) => {
        if (error) {
            console.log("error");
        } else {
            console.log("file renamed");
        }
    })
}