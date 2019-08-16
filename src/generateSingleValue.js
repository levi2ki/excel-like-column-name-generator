import { genSymbols } from "./genSymbols";

const symbols = genSymbols();

export function generateSingleValue(num) {
  return num
    .toString(26)
    .split("")
    .reverse()
    .map(x => parseInt(x, 26))
    .map((x, i) => x * 26 ** i)
    .map(x => x % 26)
    .reverse()
    .map(x => symbols[x])
    .join("");
}
