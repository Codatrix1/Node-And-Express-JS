const path = require("path");

// Platform specific separator
console.log(path.sep);

// Join path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// Base
const base = path.basename(filePath);
console.log(base);

// Get absolute path: To get the specific resource in differnt environments: dev or prod
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);
console.log(absolutePath);
