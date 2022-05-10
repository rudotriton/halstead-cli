import fs from "fs";
import path from "path";
import { promisify } from "node:util";
import error from "./error.js";

const readFileAsync = promisify(fs.readFile);

export default async (file, sourceDir = "") => {
  const fullPath = path.resolve(process.env.PWD, sourceDir, file);
  try {
    const contents = await readFileAsync(fullPath, "utf8");
    return contents;
  } catch (err) {
    error(err);
  }
};
