// Find letters in ukranian words that are written the same as English ones. 'Дерево' -> ['e', 'p', 'o']
const result = [];
const word = "україна";
const letters = ["а", "с", "е", "р", "і", "о", "х", "у"];
for (let i = 0; i < word.length; i++) {
  if (letters.includes(word[i])) result.push(word[i]);
}
console.log(result);
