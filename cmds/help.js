const chalk = require('chalk');

const menus = {
  main: `
    ${chalk.bold('halstead')} ${chalk.blue('print')} ${chalk.dim(
    '-s'
  )}
    ${chalk.dim('For further information run: ')}
    ${chalk.bold('halstead help [command]')}
  `,
  
  print: `
    ${chalk.dim(`To get halstead metrics for a source directory:\n`)}
    ${chalk.bold(`\thalstead print -s/--src <dir>`)}
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
