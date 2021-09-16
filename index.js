const fs = require("fs");
const path = require("path");
const cwd = process.cwd();
const args = process.argv;
const readline = require("readline-sync");
let cwf = "";
let run = () => {
  if (args.length > 2) {
    cwf = (args[2] === ".") ? cwd : path.join(cwd, args[2])
  } else {
      cwf = path.join(cwd, readline.question("Enter Your Project Name: "));
  }

  fs.access(cwf, error => {
    if (error) {
      fs.mkdirSync(cwf)
    } else {
      console.log("Directory exists.");
      if (fs.readdirSync(cwf).length !== 0) {
        console.log("Cannot make project!\nDirectory not empty");
      }
    }
  });
}

run()
