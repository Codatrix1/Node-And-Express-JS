const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// Using Event Emitter API
const server = http.createServer();

// emits request event
// subscrible to it / listen to it / respond to it
server.on("requestName", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
