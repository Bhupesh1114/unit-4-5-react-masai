const crypto = require("crypto");
const path = require("path");
const process = require("process");

let command = process.argv[2];

let random = crypto.randomInt(20);
if (command === "add") {
  console.log(+process.argv[3] + +process.argv[4]);
} else if (command === "sub") {
  console.log(+process.argv[3] - +process.argv[4]);
} else if (command === "mult") {
  console.log(+process.argv[3] * +process.argv[4]);
} else if (command === "div") {
  console.log(+process.argv[3] / +process.argv[4]);
} else if (command === "random") {
  console.log(random);
} else if (command === "sin") {
  console.log(Math.sin(process.argv[3]));
} else if (command === "cos") {
  console.log(Math.cos(process.argv[3]));
} else if (command === "tan") {
  console.log(Math.tan(process.argv[3]));
}
