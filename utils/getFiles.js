const fs = require('fs');
const promisify = require('util').promisify;

const readdirAsync = promisify(fs.readdir);

module.exports = async (sourceDir) => {
  const files = await readdirAsync(sourceDir);
  return files;
}

// fs.readdir(sourceDir, (_, files) => {
//   const numFiles = files.length;
//   let source = '';

//   files.forEach((file) => {
//     source += fs.readFileSync(
//       path.resolve(process.env.PWD, sourceDir, file),
//       'utf8'
//     );
//     source += '\n';
//   });
//   const lines = source.match(/\n/g).length;
//   const whiteSpaceLines = source.match(/(^[ \t]*\n)/gm).length;

//   const parsedCode = recast.parse(source);
//   const metrics = halstead(parsedCode.tokens);
//   printMetrics({ ...metrics, lines, numFiles, whiteSpaceLines });
// });