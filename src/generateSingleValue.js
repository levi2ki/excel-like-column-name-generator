import { genSymbols } from "./genSymbols";

const symbols = genSymbols();
const startPoint = 1;
const ansiStartOffset = 64; // actually 65 - 1
const charsRange = 26;
const ansiEndOffset = ansiStartOffset + charsRange;
const cache = {};

export function generateSingleValue(number) {
  const result = [0];

  let count = startPoint;
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
    if (array[i] > charsRange) {
      array[i + 1] = safeAdd(array[i + 1], 1);
      array[i] -= 26;
    }
  }
}

function safeAdd(a, b) {
  const realA = a || 0;
  const realB = b || 0;
  return realA + realB;
}

// module.exports = generateSingleValue;
