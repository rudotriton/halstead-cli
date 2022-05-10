const chalk = require("chalk");
const combineSrc = require("../utils/combineSrc");
const countTokens = require("../utils/countTokens");
const error = require("../utils/error");
const ora = require("ora");
const printMetrics = require("../utils/printMetrics");
const recast = require("recast");
const readFile = require("../utils/readFile");

module.exports = async (allArgs, isDir) => {
  const spinner = ora().start();

  const args = allArgs._.slice(1);
  const writeTSV = allArgs.tsv || false;
  const printTokens = allArgs["print-tokens"] || false;

  try {
    const sources = [...new Set(args)]; // rm duplicates

    const contents = [];

    if (isDir) {
      for (const dir of sources) {
        const code = await combineSrc(dir);
        contents.push(code);
      }
    } else {
      for (const file of sources) {
        const code = await readFile(file);
        contents.push(code);
      }
    }

    const fullCode = contents.join("\n");

    spinner.stop();

    if (fullCode === "") {
      error(chalk.red("\nNo code found to analyze."), true);
    } else {
      const parsedCode = recast.parse(fullCode);
      const metrics = countTokens(parsedCode.tokens);
      console.log(
        `${chalk.green(`\nHalstead metrics for: \n\t${sources.join(",\n\t")}\n`)}`
      );
      printMetrics(metrics, { writeTSV, printTokens });
      console.log("\n");
    }
  } catch (err) {
    spinner.stop();

    error(err);
  }
};
