export default (tokenMap) =>
  [["token", "count"], ...tokenMap]
    .map((keyval) => keyval.join("	"))
    .join("\n");
