const fs = require("fs");

// ⭐ 1st log
console.log("1. Starting the task");

fs.readFile("./content/first.txt", "utf-8", (err1, data1) => {
  if (err1) {
    console.log(`First error: ${err1}`);
    return;
  }

  const firstFile = data1;

  fs.readFile("./content/second.txt", "utf-8", (err2, data2) => {
    if (err2) {
      console.log(`Second error: ${err2}`);
      return;
    }

    const secondFile = data2;

    fs.writeFile(
      "./content/result-async.txt",
      `Here is the result text for async file reads: ${firstFile} || ${secondFile}`,
      (err3, data3) => {
        if (err3) {
          console.log(`Third error: ${err3}`);
        }

        // // data3 is undefined here
        // console.log(
        //   `File successfully written and created!! Final Data: ${data3}`
        // );

        // ⭐ 2nd log
        console.log("2. Done with the task");
      }
    );
  });
});

// ⭐ 3rd log
console.log("3. Starting the next task");
