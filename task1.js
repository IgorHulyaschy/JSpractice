// make unique array of objects [{ a:1, b:2 }, { a:2, c:3 }, { a:1, b:2 }] -> [{ a:1, b:2 }, { a:2, c:3 }]
let arr = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 3 },
];
function removeDuplicates(arr) {
  const result = [];
  const duplicatesIndices = [];

  arr.forEach((current, index) => {
    if (duplicatesIndices.includes(index)) return;

    result.push(current);

    for (
      let comparisonIndex = index + 1;
      comparisonIndex < arr.length;
      comparisonIndex++
    ) {
      const comparison = arr[comparisonIndex];
      const currentKeys = Object.keys(current);
      const comparisonKeys = Object.keys(comparison);

      if (currentKeys.length !== comparisonKeys.length) continue;

      const currentKeysString = currentKeys.sort().join("").toLowerCase();
      const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
      if (currentKeysString !== comparisonKeysString) continue;

      let valuesEqual = true;
      for (let i = 0; i < currentKeys.length; i++) {
        const key = currentKeys[i];
        if (current[key] !== comparison[key]) {
          valuesEqual = false;
          break;
        }
      }
      if (valuesEqual) duplicatesIndices.push(comparisonIndex);
    } // Конец цикла
  });
  return result;
}
console.log(removeDuplicates(arr));
