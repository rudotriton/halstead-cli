module.exports = (tokens) => {
  const operators = [];
  const operands = [];

  const makeTokenTable = (tokens) => tokens
    .filter(token => token.type !== 'String')
    .reduce((acc, { value: token }) =>
      acc.has(token)
        ? acc.set(token, acc.get(token) + 1)
        : acc.set(token, 1), new Map());

  tokens.forEach(({ type, value }) => {
    // console.log('type: ', chalk.green(type.padEnd(10, ' ')), ' - value: ', chalk.blue(value));
    switch (type) {
      case 'Numeric':
      case 'Identifier':
        operands.push(value);
        break;
      default:
        operators.push(value);
    }
  });

  return {
    totalOperators: operators.length,
    distinctOperators: [...new Set(operators)].length,
    totalOperands: operands.length,
    distinctOperands: [...new Set(operands)].length,
    tokenTable: makeTokenTable(tokens),
  };
};
