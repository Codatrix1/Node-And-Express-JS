const http = require("http");

// create server
const myServer = http.createServer((req, res) => {
  console.log("Request Event Trigerred");
  res.end(`Hello there friend`);
});

// default port number
const PORT = 5000;

// listen to server
myServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
