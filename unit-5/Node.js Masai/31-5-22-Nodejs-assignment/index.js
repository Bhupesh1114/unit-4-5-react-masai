const crypto = require('crypto');
const path = require('path');
const process = require('process');

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
}

else if (command === "random") {
    console.log(random);
}
   
    