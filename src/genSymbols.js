import { ANSI_APLHABET_START_OFFSET } from "./constants";

const a = {};
let memoized = false;

export function genSymbols() {
  if (memoized) {
    return a;
  }
  for (let i = 1; i <= 26; i++) {
    a[i] = String.fromCharCode(i + ANSI_APLHABET_START_OFFSET);
  }
  memoized = true;
  return a;
}
