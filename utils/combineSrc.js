const getFiles = require("./getFiles");
const readFile = require("./readFile");

module.exports = async (sourceDir) => {
  try {
    const files = await getFiles(sourceDir);
    let script = [];

    for (const file of files) {
      const contents = await readFile(file, sourceDir);
      script.push(contents);
    }

    return script.join("\n");
  } catch (err) {
    console.log(err.error);
  }
};
