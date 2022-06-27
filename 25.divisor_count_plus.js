// 항해99 - 프로그래머스 알고리즘 문제
// JavaScript - 25. 약수의 개수와 덧셈

/* [문제]
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000
입출력 예
left	right	result
13	17	43
24	27	52
입출력 예 설명
입출력 예 #1

다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
수	약수	약수의 개수
13	1, 13	2
14	1, 2, 7, 14	4
15	1, 3, 5, 15	4
16	1, 2, 4, 8, 16	5
17	1, 17	2
따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.
입출력 예 #2

다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.
수	약수	약수의 개수
24	1, 2, 3, 4, 6, 8, 12, 24	8
25	1, 5, 25	3
26	1, 2, 13, 26	4
27	1, 3, 9, 27	4
따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.*/

// 약수를 구하는 함수
function divisor(num) {
  let count = 0;
  // 약수는 숫자를 나누었을 때, 나머지가 0이 되는 것만 약수가 될 수 있으므로,
  // i가 0부터 num까지 늘려가며 num % i 의 나머지가 0이 되면 약수이다.
  // num % i 가 0이라면 카운트를 1씩 증가시켜가며 총 약수의 개수를 구할 수 있는 함수이다.
  for (let i = 0; i <= num; i++) {
    if(num % i === 0) {
      count++
    }
  }
  return count
}

// left와 right 사이의 수들의 약수를 구해야 하기 때문에
function solution(left, right) {
  let answer = 0;
  // for문을 돌릴 때, left값에서 시작해서 right값까지 반복문을 돌리고
  for(let i = left; i <= right; i++) {
    // 이 때, divisor (약수를 구하는 함수)로 i 값이 들어가 divisor 의 num 에 들어가고
    // divisor 가 구동되며 나온 count 값을 2로 나누어 0이라면 짝수 / 아니라면 홀수이기 때문에
    // divisor(i) % 2 === 0 이라는 조건을 주어 짝수 일 경우 : answer 에 i 값을 계속 더해주고
    // divisor(i) % 2 === 0 이 아니라면 홀수 이기 때문에 : answer 에 i 값은 계속 빼준다.
    if(divisor(i) % 2 === 0) {
      answer += i
    } else {
      answer -= i
    }
  }
  return answer;
}

console.log(solution(13, 17))