'use strict';Object.defineProperty(exports,'__esModule',{value:true});function memoize(fn) {
  var cache = {};
  return function memoized() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (cache.hasOwnProperty(args[0])) {
      return cache[args[0]];
    } else {
      var result = fn.apply(void 0, args);
      cache[args[0]] = result;
      return result;
    }
  };
}var a = {};
var memoized = false;
function genSymbols() {
  if (memoized) {
    return a;
  }

  for (var i = 1; i <= 26; i++) {
    a[i] = String.fromCharCode(i + 64);
  }

  memoized = true;
  return a;
}var symbols = genSymbols();
var startPoint = 1;

var charsRange = 26;
function generateSingleValue(number) {
  var result = [0];
  var count = startPoint;

  while (count <= number) {
    result[0] += 1;
    recalculate(result);
    count++;
  }

  return result.reverse().map(function (x) {
    return symbols[x];
  }).join("");
}

function recalculate(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > charsRange) {
      array[i + 1] = safeAdd(array[i + 1], 1);
      array[i] -= 26;
    }
  }
}

function safeAdd(a, b) {
  var realA = a || 0;
  var realB = b || 0;
  return realA + realB;
} // module.exports = generateSingleValue;
function generateColumnNames(generator) {
  return function (count) {
    var result = [];

    for (var i = 1; i <= count; i++) {
      result.push(generator(i));
    }

    return result;
  };
}var genColumns = generateColumnNames(generateSingleValue);
var memoizedGenColumns = generateColumnNames(memoize(generateSingleValue));
var genSingleValue = generateSingleValue;exports.genColumns=genColumns;exports.genSingleValue=genSingleValue;exports.memoizedGenColumns=memoizedGenColumns;