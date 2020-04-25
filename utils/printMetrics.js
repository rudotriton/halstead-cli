const sb = require('./stringBuilder');
const fs = require('fs');
const convertToCsv = require('./tokenMapToCsv');

module.exports = (metrics) => {
  const {
    totalOperands,
    totalOperators,
    distinctOperands,
    distinctOperators,
    tokenTable
  } = metrics;

  console.table(tokenTable);
  fs.promises.writeFile(`${process.cwd()}${'/tokens.csv'}`, convertToCsv(tokenTable));

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
