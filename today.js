module.exports.getDate = function getDate() {
  var eestTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Helsinki",
  });
  return new Date(eestTime);
};
