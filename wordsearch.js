//For this challenge, you'll be implementing a word search solver, as a function that receives a 2D array of letters and a word. The function must:

//Check to find the word horizontally and vertically
//Return true if the word is found, and return false if the word is not found


const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  }
  // Evaluating vertical arrays
  let newArr = [];
  // Created a new empty array

  // Looped through matrix, and pushed in elements in the correct nested array
  for (let i = 0; i < letters[0].length; i++) {
    newArr.push([]);
  }

  for (let i = 0; i < letters[0].length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      newArr[j].push(letters[i][j]);
    }
  }

  const verticalJoin = [];
  for (let arr of newArr) {
    verticalJoin.push(arr.join(""));
  }

  // console.log(verticalJoin);

  // Evaluate vertical arrays
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  // Evaluating horizontal arrays
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;