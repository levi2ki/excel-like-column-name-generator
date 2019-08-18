import { ANSI_APLHABET_START_OFFSET, ANSI_APLHABET_RANGE } from "./constants";

export default function parse(colName) {
  return colName
    .split("")
    .reverse()
    .map((x,i) => (x.charCodeAt() - ANSI_APLHABET_START_OFFSET) * ANSI_APLHABET_RANGE ** i)
    .reduce((a, b) => a + b);
}
