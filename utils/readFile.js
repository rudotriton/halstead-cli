const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;

const readFileAsync = promisify(fs.readFile);

module.exports = async (file, sourceDir = '') => {
  const fullPath = path.resolve(process.env.PWD, sourceDir, file);
  const contents = await readFileAsync(fullPath, 'utf8');
  return contents;
};
