// 항해99 - 프로그래머스 알고리즘 문제
// JavaScript - 3. 수박수박수박수박수박수?

/* [문제]
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.*/


function solution(n) {
  let answer = '';
  // 만약 들어오는 n을 2로 나누었을 때 나머지가 0이라면 : 짝수
  if(n%2 === 0) {
      // 짝수라면 수박을 n/2를 반복해줘!
      // n = 2 라면, 2 / 2 = 1 이므로 '수박'을 1번만 반복한다.
      answer = '수박'.repeat(n/2)
  } else {
      // 홀수라면 수박을 n/2로 나누고 뒤의 소수점을 버린 후 '수' 를 붙여줘!
      // n = 3 라면, 3/2 = 1.5 이므로 0.5를 Math.floor 로 버린 후 '수박'을 1번 반복하고
      // 그 후에 '수' 를 붙여서 출력해줘!
      answer = '수박'.repeat(Math.floor(n/2)) + '수'
  }
  return answer;
}

console.log(solution(9))