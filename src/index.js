import { memoize } from "./memoize";
import { generateSingleValue } from "./generateSingleValue";
import { generateColumnNames } from "./generateColumnNames";

export const genColumns = generateColumnNames(generateSingleValue);
export const memoizedGenColumns = generateColumnNames(
  memoize(generateSingleValue)
);
