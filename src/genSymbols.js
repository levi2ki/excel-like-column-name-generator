var a = {};
var memoized = false;

export function genSymbols() {
  if (memoized) {
    return a;
  }
  for (let i = 0; i < 26; i++) {
    a[i] = String.fromCharCode(i + 65);
  }
  memoized = true;
  return a;
};
