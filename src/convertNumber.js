import { ANSI_APLHABET_RANGE } from "./constants";
import { genSymbols } from "./genSymbols";
import { safeAdd } from "./safeAdd";

const symbols = genSymbols();

const cache = {};
const increment = safeAdd(1);

export function convertNumber(number) {
  const result = [0];

  let count = 1;
  while (count <= number) {
    result[0] += 1;
    recalculate(result);
    count++;
  }

  return result
    .reverse()
    .map(x => symbols[x])
    .join("");
}

function recalculate(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > ANSI_APLHABET_RANGE) {
      array[i + 1] = increment(array[i + 1]);
      array[i] -= ANSI_APLHABET_RANGE;
    }
  }
}
