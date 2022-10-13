const fs = require("fs");

console.log("1. Start");

const firstFile = fs.readFileSync("./content/first.txt", "utf-8");
const secondFile = fs.readFileSync("./content/second.txt", "utf-8");

fs.writeFileSync(
  "./content/result-sync.txt",
  `Here are the two files: ${firstFile} || ${secondFile}`,
  // To append to the existing text
  { flag: "a" }
);

console.log("2. Done with the task");
console.log("3. Starting the next task");
