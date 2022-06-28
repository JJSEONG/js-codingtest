// 항해99 - 프로그래머스 알고리즘 문제
// JavaScript - 28. 최대공약수와 최소공배수

/* [문제]
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.
입출력 예
n	m	return
3	12	[3, 12]
2	5	[1, 10]
입출력 예 설명
입출력 예 #1
위의 설명과 같습니다.

입출력 예 #2
자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.*/

function solution(n, m) {
  let answer = [];
  let big_num = 0
  let small_num = 0
  let gcd = []
  let lcm = 0

  if(n > m) {
    big_num = n
    small_num = m        
  } else {
    big_num = m
    small_num = n
  }

  // 최대공약수
  for(let i = 0; i <= big_num; i++) {
    if(big_num%i === 0 && small_num%i === 0) {
      gcd.push(i)
    }
  }

  // 두 수의 곱 = 최대공약수 * 최소공배수
  // 최소공배수 = 두수의 곱 / 최대공약수
  lcm = big_num * small_num / Math.max(...gcd)

  return answer = [Math.max(...gcd), lcm]
  
  // return `최대공약수 : ${Math.max(...gcd)} 최소공배수 : ${lcm}`

  
}
console.log(solution(2, 5))