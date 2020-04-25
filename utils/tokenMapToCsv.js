module.exports = (tokenMap) =>
  [...tokenMap]
    .map(keyval => keyval.join(', '))
    .join('\n');
