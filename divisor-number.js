function solution(arr, divisor) {
  var answer = [];
  for (i = 0; i < arr.length; i++) {
    if ((arr[i] % divisor) === 0) {
        answer.push(arr[i])
      }
    }

    if (answer.length === 0) {
        answer = [-1]
    } else {
      answer.sort((a,b) => a - b)
    }

  return answer//.length === 0? [-1]:answer.sort((a,b) => a - b)
}
console.log(solution([5, 10, 15, 20, 23], 5))