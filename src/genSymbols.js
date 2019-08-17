const a = {};
let memoized = false;

export function genSymbols() {
  if (memoized) {
    return a;
  }
  for (let i = 1; i <= 26; i++) {
    a[i] = String.fromCharCode(i + 64);
  }
  memoized = true;
  return a;
}
