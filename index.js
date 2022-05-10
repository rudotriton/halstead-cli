import minimist from 'minimist';
import error from './utils/error.js';
import chalk from 'chalk';
import main from "./cmds/main.js";
import help from "./cmds/help.js";
import version from "./cmds/version.js";

function program() {
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
        main(args, true);
      break;
    case "file":
      main(args);
      break;
    case "version":
      version();
      break;
    case "help":
      help(args);
      break;
    default:
      error(chalk.red(`"${cmd}" is not a valid command!`), true);
      break;
  }
}

program();
// export default program;
