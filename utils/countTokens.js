module.exports = (tokens) => {
  const operators = [];
  const operands = [];

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
  };
};
