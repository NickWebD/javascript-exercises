const sumAll = function (min, max) {
  let result = 0;
  if (min < 0 || max < 0) return "ERROR";
  if (typeof min !== "number" || typeof max !== "number") return "ERROR";

  if (min > max) {
    [min, max] = [max, min];
  }

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
