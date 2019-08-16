export function generateColumnNames(generator) {
    return function (count) {
        const result = [];
        for (let i = 0; i <= count; i++) {
          result[i] = generator(i);
        }
        return result;
      }
};
