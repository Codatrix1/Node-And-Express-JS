const fs = require("fs");

console.log("1. First Task Started");

// CHECK FILE PATH
fs.readFile("../content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error Reading the file ${err}`);
  }

  console.log(data);
  console.log("2. Finished the First Task");
});

console.log("3. Second Task Started");
