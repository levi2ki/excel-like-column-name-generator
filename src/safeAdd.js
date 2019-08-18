import curry from './curry';

function add(a, b) {
  const realA = a || 0;
  const realB = b || 0;
  return realA + realB;
}

export const safeAdd = curry(add);