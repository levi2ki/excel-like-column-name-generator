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
}var ANSI_ALPHABET_OFFSET = 65;
var ANSI_APLHABET_START_OFFSET = ANSI_ALPHABET_OFFSET - 1;
var ANSI_APLHABET_RANGE = 26;var a = {};
var memoized = false;
function genSymbols() {
  if (memoized) {
    return a;
  }

  for (var i = 1; i <= 26; i++) {
    a[i] = String.fromCharCode(i + ANSI_APLHABET_START_OFFSET);
  }

  memoized = true;
  return a;
}function curry(fn) {
  var arity = fn.length;
  return function $$curry() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length < arity) {
      return $$curry.bind.apply($$curry, [null].concat(args));
    }

    return fn.apply(void 0, args);
  };
}function add(a, b) {
  var realA = a || 0;
  var realB = b || 0;
  return realA + realB;
}

var safeAdd = curry(add);var symbols = genSymbols();
var increment = safeAdd(1);
function convertNumber(number) {
  var result = [0];
  var count = 1;

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
    if (array[i] > ANSI_APLHABET_RANGE) {
      array[i + 1] = increment(array[i + 1]);
      array[i] -= ANSI_APLHABET_RANGE;
    }
  }
}function generateColumnNames(generator) {
  return function (count) {
    var result = [];

    for (var i = 1; i <= count; i++) {
      result.push(generator(i));
    }

    return result;
  };
}function parse(colName) {
  return colName.split("").reverse().map(function (x, i) {
    return (x.charCodeAt() - ANSI_APLHABET_START_OFFSET) * Math.pow(ANSI_APLHABET_RANGE, i);
  }).reduce(function (a, b) {
    return a + b;
  });
}var genColumns = generateColumnNames(convertNumber);
var memoizedGenColumns = generateColumnNames(memoize(convertNumber));
var genSingleValue = convertNumber;exports.genColumns=genColumns;exports.genSingleValue=genSingleValue;exports.memoizedGenColumns=memoizedGenColumns;exports.parse=parse;