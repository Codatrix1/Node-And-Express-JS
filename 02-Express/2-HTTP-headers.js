const http = require("http");

// Create Server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" }); // MIME Type
  res.write(`<h1>Home Page</h1>`);
  res.end();
});

// Listen to server
server.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
