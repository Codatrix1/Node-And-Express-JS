// CommonJS Library used by Node as default, every file is a module (by default)
// Module - Encapsulated Code (Only share minimum)

const names = require("./4-names");
const sayHiFunction = require("./5-utils");
const data = require("./6-alternative-flavour");

sayHiFunction("susan");
sayHiFunction(names.john);
sayHiFunction(names.peter);

require("./7-mind-grenade");
