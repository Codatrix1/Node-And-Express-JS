const http = require("http");

// 1. Create Server
const myServer = http.createServer((req, res) => {
  //   console.log(req);

  if (req.url === "/") {
    res.end("Welcome to our Homepage");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(
      `<h1>Oop! This page does not exists.</h1> <p>Go back to homepage</p> <a href = "/">Back Home</a>`
    );
  }
});

// 2. Listen to server
myServer.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
