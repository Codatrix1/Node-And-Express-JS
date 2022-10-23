const http = require("http");

// 1. Create Server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    // ❗ BLOCKING CODE
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}: ${j}`);
      }
    }
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
});

// 2. Listen to server
server.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
