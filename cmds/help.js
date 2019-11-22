const chalk = require('chalk');

const menus = {
  main: `
    ${chalk.bold("halstead metrics cli\n")}
    ${chalk.bold("dir")} - print metrics for the whole directory
    ${chalk.dim("\tExample: halstead dir src")}
    
    ${chalk.bold("file")} - print metrics for all specified files\n
    ${chalk.dim("\tExample: halstead file src/index.js")}
    ${chalk.dim("\tExample: halstead file src/index.js src/file.js\n")}
    ${chalk.dim("For further information run: ")}
    ${chalk.bold("\thalstead help [command]")}
  `,

  dir: `
    ${chalk.dim(`To get halstead metrics for a source directory:\n`)}
    ${chalk.bold(`\thalstead dir <dir>`)}
    ${chalk.dim(`\tExample: halstead dir src`)}
  `,

  file: `
    ${chalk.dim(`To get halstead metrics for all specified files:\n`)}
    ${chalk.bold(`\thalstead file <filename>`)}
  `,

  version: `
    ${chalk.bold(`Try 'halstead -v' or 'halstead --version' instead`)}
  `,

  help: `
    ${chalk.bold(
      `There is no additional help. Try 'halstead help' or 'halstead -h' instead.`
    )}
  `,
};

module.exports = (args) => {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
