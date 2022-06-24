// 항해99 - 프로그래머스 알고리즘 문제
// JavaScript - 2. 나누어 떨어지는 숫자 배열

/* [문제]
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요. divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요. */

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

// Anothoer Code [삼항연산자 사용]//

/*
function solution(arr, divisor) {
  var answer = [];
  for (i = 0; i < arr.length; i++) {
    if ((arr[i] % divisor) === 0) {
        answer.push(arr[i])
      }
    }

  return answer.length === 0? [-1]:answer.sort((a,b) => a - b)
}
*/
