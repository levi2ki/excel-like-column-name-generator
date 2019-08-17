export function generateColumnNames(generator) {
    return function (count) {
        const result = [];
        for (let i = 1; i <= count; i++) {
          result.push(generator(i));
        }
        return result;
      }
};
