const fs = require("fs").promises;

// const fs = require("fs");
// const util = require("util");

// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

const start = async () => {
  try {
    const firstFileData = await fs.readFile("./content/first.txt", "utf-8");
    const secondFileData = await fs.readFile("./content/second.txt", "utf-8");

    await fs.writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${firstFileData} || ${secondFileData}`,
      {
        flag: "a",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

start();
