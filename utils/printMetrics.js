const sb = require('./stringBuilder');
const fs = require('fs');
const convertToTsv = require('./tokenMapToTsv');

module.exports = (metrics, { writeTSV = false , printTokens = false }) => {
  const {
    totalOperands,
    totalOperators,
    distinctOperands,
    distinctOperators,
    tokenTable
  } = metrics;

  const sortedTable = [...tokenTable].sort((a,b) => b[1] - a[1]);
  if (printTokens) {
    console.table(sortedTable)
  }

  if (writeTSV) {
    fs.promises.writeFile(`${process.cwd()}${'/tokens.tsv'}`, convertToTsv(sortedTable));
  }

  console.log(sb('Total operators', totalOperators, false));
  console.log(sb('Distinct operators', distinctOperators, false));
  console.log(sb('Total operands', totalOperands, false));
  console.log(sb('Distinct operands', distinctOperands, false));
  console.log('');

  const programLength = totalOperators + totalOperands;
  console.log(sb('Program length', programLength, false));
  const programVocabulary = distinctOperators + distinctOperands;
  console.log(sb('Program vocabulary', programVocabulary, false));

  const estimatedLength =
    distinctOperators * Math.log2(distinctOperators) +
    distinctOperands * Math.log2(distinctOperands);
  console.log(sb('Estimated length', estimatedLength));

  const purityRatio = estimatedLength / programLength;
  console.log(sb('Purity ratio', purityRatio));

  const volume = programLength * Math.log2(programVocabulary);
  console.log(sb('Volume', volume));

  const difficulty =
    (distinctOperators / 2) * (totalOperands / distinctOperands);
  console.log(sb('Difficulty', difficulty));

  const effort = difficulty * volume;
  console.log(sb('Program effort', effort));

  const timeReqToProgram = effort / 18;
  console.log(sb('Time required to program (h)', timeReqToProgram / 3600));

  const numOfDeliveredBugs = Math.pow(effort, 2 / 3) / 3000;
  console.log(sb('Number of delivered bugs', numOfDeliveredBugs));
};
