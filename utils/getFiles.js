const fs = require("fs");
const promisify = require("util").promisify;
const error = require("./error");

const readdirAsync = promisify(fs.readdir);

module.exports = async (sourceDir) => {
  try {
    const files = await readdirAsync(sourceDir);
    return files;
  } catch (err) {
    error(err);
  }
};
