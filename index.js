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
    case "dir":
      require("./cmds/dir")(args);
      break;
    case "file":
      require("./cmds/file")(args);
      break;
    case "version":
      require("./cmds/version")();
      break;
    case "help":
      require("./cmds/help")(args);
      break;
    default:
      error(chalk.red(`"${cmd}" is not a valid command!`), true);
      break;
  }
}
