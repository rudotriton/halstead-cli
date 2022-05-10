#!/usr/bin/env node
import { spawnSync } from "child_process";
import { resolve } from "path";

const cmd = `node --no-warnings ${resolve(process.env.PWD, "index.js")} ${process.argv.slice(2).join(" ")}`;
spawnSync(cmd, {stdio: "inherit", shell: true });
