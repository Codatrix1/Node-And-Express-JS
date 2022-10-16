// npm - global version, comes with node
// npm --version
// npm --v

// local dependency  -  use it only in this particular project
// npm i <packageName>

// global dependency  -  use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> [macOS]

// package.json  -  manifest file (stores important info about the project/package)
// manual approach  -  (create package.json in the root, create properties, etc)
// automatic approach
//     1. npm init (step-by-step, enter to skip)
//     2. npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
