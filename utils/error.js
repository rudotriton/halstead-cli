import { exit } from 'node:process';

export default (message, toExit) => {
  console.error(message);
  toExit && exit(1);
};
