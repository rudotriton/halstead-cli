import pack from "../package.json" assert { type: "json" };

export default () => {
  console.log(`v${pack.version}`);
};
