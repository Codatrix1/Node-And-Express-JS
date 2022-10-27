const http = require("http");

// Create Server
const server = http.createServer((req, res) => {
  console.log("User hit the server");
  res.end("Home Page");
});

// Listen to server
server.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
