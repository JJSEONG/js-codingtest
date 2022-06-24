// 항해99 - 프로그래머스 알고리즘 문제
// JavaScript - 8. 정수 제곱근 판별

/* [문제]
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요. */

function solution01(n) {
  let num = 0;
  let answer = 0;

  for (let i = 1; i*i <= n; i++) {
    if(i*i === n) {
      num = i + 1
      answer = num * num
    } else {
      answer = -1
    }
  }
  return answer
}
console.log(solution01('for문을 사용해 만든 함수 : ' + '9'))
console.log(solution01('for문을 사용해 만든 함수 : ' + '8'))



// Math.sqrt(x) => 현재 숫자의 제곱근을 구해줌
// Math.sqrt(4) => 2 출력
// Math.sqrt(6) => 2.449489742783178... 출력
// 정수인지 판단해서 x의 값에 +1 한 값을 다시 넣어주고, 그 값을 제곱해주면 됨

function solution2(n) {
  let sqrt = Math.sqrt(n);
  if (sqrt%1 === 0) {
    sqrt = (sqrt + 1) * (sqrt + 1)
  } else {
    sqrt = -1
  }
  return sqrt
}
console.log(solution2('Math.sqrt(n)을 사용하여 만든 함수 : ' + solution2(121)))
console.log(solution2('Math.sqrt(n)을 사용하여 만든 함수 : ' + solution2(88)))


// Math.pow(a, b) => a에 속하는 숫자를 b번만큼 서로 곱한다
// Math.pow(3, 2) => 3 * 3 의 값인 9 출력
// Math.sqrt(5, 5) => 5 * 5 * 5 * 5 * 5 = 3125 출력
// Math.sqrt(n)으로 제곱근을 생성 => 생성된 제곱근을 1로 나누어 나머지가 0인지 확인
// 나머지가 0이라면 정수 / 0이 아니라면 정수가 아님
// 나머지가 0인 정수에 Math.pow(정수+1, 2) 를 설정하여 정수에 + 1 한 내용을 다시 넣어주고 그 값을
// (정수 + 1) * (정수 + 1) 이 실행됨
// 삼항연산자 사용하여 return sqrt%1===0?Math.pow(sqrt+1, 2):-1;
// 이는 if(sqrt%1===0) {return Math.pow(sqrt+1, 2)} else {return -1} 과 같은 뜻이다.

function solution3(n) {
  let sqrt = Math.sqrt(n);
  return sqrt%1===0?Math.pow(sqrt+1, 2):-1;
}

console.log(solution(10))
