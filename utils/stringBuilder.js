const chalk = require('chalk');

module.exports = (metric, value, toDec = true) => {
  let num = value;
  if (toDec) {
    num = num.toFixed(2);
  } else {
    num = num.toFixed(0);
  }
  return metric.padEnd(35, '.') + chalk.yellow(num.padStart(10, '.'));
};
