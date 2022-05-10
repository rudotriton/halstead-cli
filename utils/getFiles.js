import fs from "fs";
import { promisify } from "node:util";
import error from "./error.js";

const readdirAsync = promisify(fs.readdir);

export default async (sourceDir) => {
  try {
    const files = await readdirAsync(sourceDir);
    return files;
  } catch (err) {
    error(err);
  }
};
