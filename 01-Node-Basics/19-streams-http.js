const http = require("http");
const fs = require("fs");

// Server to read stream: HTTP Module
const server = http.createServer((req, res) => {
  //   const text = fs.readFileSync("./content/big.txt", "utf-8");
  //   res.end(text);
  const fileStream = fs.createReadStream("./content/big.txt", "utf-8");

  fileStream.on("open", () => {
    fileStream.pipe(res);
  });

  fileStream.on("error", (err) => {
    res.end(err);
  });
});

// Listen to server
server.listen(5000);
