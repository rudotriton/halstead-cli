const ora = require('ora');
const combineSrc = require('../utils/combineSrc');
const recast = require('recast');
const countTokens = require('../utils/countTokens');
const printMetrics = require('../utils/printMetrics');
const chalk = require('chalk');

module.exports = async (allArgs) => {
  const spinner = ora().start();
  
  const args = allArgs._.slice(1)
  const printCSV = allArgs.csv || false;

  try {
    const sourceDir = args[0];
    
    const fullScript = await combineSrc(sourceDir);
    
    spinner.stop();
    
    const parsedCode = recast.parse(fullScript);
    const metrics = countTokens(parsedCode.tokens);
    console.log(`${chalk.green(`\nHalstead metrics for: ${sourceDir}\n`)}`);
    printMetrics(metrics, printCSV);
    console.log('\n');
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
