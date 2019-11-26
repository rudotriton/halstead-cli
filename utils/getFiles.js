const fs = require('fs');
const promisify = require('util').promisify;

const readdirAsync = promisify(fs.readdir);

module.exports = async (sourceDir) => {
  const files = await readdirAsync(sourceDir);
  return files;
}