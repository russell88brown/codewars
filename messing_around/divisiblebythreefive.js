function sortArray(array) {
  var answer = [];
  (for i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 || array[i] % 5) {
     answer.push(array[i]);
    }
  }
  return answer
}
sortArray([5, 3, 2, 8, 1, 4])