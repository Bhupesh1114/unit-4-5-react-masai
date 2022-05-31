const process = require("process");
const fs = require("fs");
const path = require("path");

let command = process.argv[2];
if (command === "append") {
  fs.appendFile(process.argv[4], process.argv[3], (error) =>
    error ? console.log(error) : console.log("Line Added")
  );
} else if (command === "read") {
  fs.readFile(process.argv[3], { encoding: "utf8" }, (error, data) =>
    error ? console.log(error) : console.log(data)
  );
} else if (command === "delete") {
  fs.unlink(process.argv[3], (error) =>
    error ? console.log(error) : console.log(process.argv[3], "file is deleted")
  );
} else if (command === "create") {
  fs.writeFile(process.argv[3], "", (error) =>
    error ? console.log(error) : console.log("File created")
  );
} else if (command === "rename") {
  fs.rename(process.argv[3], process.argv[4], (error) =>
    error ? console.log(error) : console.log("File renamed")
  );
}
