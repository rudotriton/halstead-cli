const { exit } = require('node:process');

module.exports = (message, toExit) => {
  console.error(message);
  toExit && exit(1);
};
