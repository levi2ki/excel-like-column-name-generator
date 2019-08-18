import { memoize } from "./memoize";
import { convertNumber } from "./convertNumber";
import { generateColumnNames } from "./generateColumnNames";

export { default as parse } from "./parse";
export const genColumns = generateColumnNames(convertNumber);
export const memoizedGenColumns = generateColumnNames(memoize(convertNumber));
export const genSingleValue = convertNumber;
