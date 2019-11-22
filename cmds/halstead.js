const ora = require('ora');
const combineSrc = require('../utils/combineSrc');
const recast = require('recast');
const countTokens = require('../utils/countTokens');
const printMetrics = require('../utils/printMetrics');
const chalk = require('chalk');

module.exports = async (args) => {
  const spinner = ora().start();

  try {
    const sourceDir = args.src || args.s;
    
    const fullScript = await combineSrc(sourceDir);
    
    spinner.stop();
    
    const parsedCode = recast.parse(fullScript);
    const metrics = countTokens(parsedCode.tokens);
    console.log(`${chalk.green(`\nHalstead metrics for: ${sourceDir}\n`)}`);
    printMetrics(metrics);

  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
