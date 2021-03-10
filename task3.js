// Find letters in ukranian words that are written the same as English ones. 'Дерево' -> ['e', 'p', 'o']
const result = [];
const word = "уКраїна";
const letters = ["а", "с", "е", "р", "і", "о", "х", "у", "А", "В", "С", "Н", "І", "К", "М", "О", "Р", "Т", "Х"];
for (let i = 0; i < word.length; i++) {
  if (letters.includes(word[i])) result.push(word[i]);
}
console.log(result);
