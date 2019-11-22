const getFiles = require('./getFiles');
const readFile = require('./readFile');

module.exports = async (sourceDir) => {
  const files = await getFiles(sourceDir);
  let script = '';
  
  for (const file of files) {
    const contents = await readFile(file, sourceDir);
    script += contents;
  }

  return script;
}