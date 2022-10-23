const fs = require("fs");

// Function to read a text file using custom path: Using Promise
const getTextFunction = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Call the Function - Consume Promise - Catch Error, if any
getTextFunction("./content/first.txt")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
