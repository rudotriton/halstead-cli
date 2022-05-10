module.exports = (tokenMap) =>
  [["token", "count"], ...tokenMap]
    .map((keyval) => keyval.join("	"))
    .join("\n");
