// EVENTS

// Event-Driven Programming
// Used Heavily in Node.js

// on - Listen for an event/ Subscribe to an event
// emit - emit an event

// 1. Import events module as a Class
const EventEmitter = require("events");

// 2. Instantiate an event
const customEmitter = new EventEmitter();

// 3. Subscribe/Listen to a custom event: Named
customEmitter.on("response", (name, id) => {
  console.log(`Data Received for ${name} with ID: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Some Other Logic`);
});

// 4. Emit to the event
customEmitter.emit("response", "John", "35");
