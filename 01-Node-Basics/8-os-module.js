const os = require("os");

// Get info about the current user
const currentUser = os.userInfo();
console.log(currentUser);

// Method returns the system uptime
console.log(`The System Uptime is ${os.uptime()} seconds`);

// System Information
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
