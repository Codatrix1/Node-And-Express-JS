const http = require("http");
const fs = require("fs");

// get all files
const homePage = fs.readFileSync("./index.html");

// Create server
const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req.url);

  const url = req.url;

  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
    // About Page
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>About Page</h1>`);
    res.end();
    // Not Found 404
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>Oops! Page Not Found</h1>`);
    res.end();
  }
});

// Listen to server
server.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
