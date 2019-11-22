const minimist = require('minimist');
const error = require('./utils/error');
const chalk = require('chalk');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  
  let cmd = args._[0] || 'help';
  
  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }
  
  switch (cmd) {
    case "print":
      require("./cmds/halstead")(args);
      break;
    case "version":
      require("./cmds/version")(args);
      break;
    case "help":
      require("./cmds/help")(args);
      break;
    default:
      error(chalk.red(`"${cmd}" is not a valid command!`), true);
      break;
  }
}

// const getFiles = require('./utils/getFiles');
// const readFile = require('./utils/readFile');
// const combineSource = require('./utils/combineSrc');
// const halstead = require('./utils/halstead');

// const main = async () => {
//   // const files = await getFiles('./utils');
//   // console.log(files);
//   // const file = await readFile(files[0], './utils');
//   // console.log(file);
//   // const all = await combineSource('./utils');
//   // console.log(all);
//   await halstead('./code');
// }

// main();