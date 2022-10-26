// EVENTS

// Event-Driven Programming
// Used Heavily in Node.js

// on - Listen for an event/ Subscribe to an event
// emit - emit an event

// ⭐ 1. Import events module as a Class
// get back the class
// if want cutom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

// ⭐ 2. Instantiate an event
const customEmitter = new EventEmitter();

// ⭐ 3. Subscribe/Listen to a custom event: Named
// on and emit methods
// keep track of the order
// additional arguments
// buit-in modules utilize it
customEmitter.on("response", (name, id) => {
  console.log(`Data Received for ${name} with ID: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Some Other Logic`);
});

// ⭐ 4. Emit to the event
customEmitter.emit("response", "John", "35");
