export function memoize(fn) {
  var cache = {};

  return function memoized(...args) {
    if (cache.hasOwnProperty(args[0])) {
      return cache[args[0]];
    } else {
      var result = fn(...args);
      cache[args[0]] = result;
      return result;
    }
  };
}
