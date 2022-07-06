// 항해99 - 프로그래머스 알고리즘 문제
// JavaScript - 31. 소수 찾기

/* [문제]
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.
입출력 예
n	result
10	4
5	3
입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환*/

// 시간초과 발생
// function solution(n) {
//   let answer = 0;
//   let arr = [];
//   for(let i = 1; i <= n; i++) {
//       let count = 0;
//     for(let j = 1; j <= i; j++) {
//       if(i % j === 0) {
//         count++
//       }
//     }
//     if(count === 2) {
//       arr.push(i)
//     }
//   }
//   answer = arr.length
//   return answer;
// }

function solution(n) {
  let answer = [];
  // 0과 1로 시작하는 배열을 생성
  // 0과 1은 소수가 아니기에 0으로 지정하여 줌
  let numbers = [0,0];
  // i가 2부터 돌며, n의 숫자까지 돌며 i 를 증가시켜준다
  // 그 후 push 하여 numbers에 넣어준다.
  for(let i = 2; i <= n; i++) {
      numbers.push(i);
  }
  // numbers의 배열 확인하기 위한 콘솔
  console.log(numbers)
  // for문을 돌며, 0와 1은 소수가 아니므로 삭제해주어야 하는 수
  // 그러므로, 0, 1 을 제외한 숫자 2부터 시작해야 하니, 인덱스 0 , 1 다음인 i = 2 를 설정
  // n 까지의 반복문 길이 설정
  for(let i = 2; i <= n; i++){
      // numbers[i] 가 0이라면 다음 i 번째로 돌아가줘 라는 뜻이 된다.
      // numbers[2] 부터 시작하므로, 2 는 0 이 아니므로 아래 for문으로 이동하게 된다.
      if (numbers[i] === 0) continue;

      // for문을 돌며, j 가 i * 2 로 시작을 하고, j 가 += 2가 증가하게 된다.
      // j 가 i * 2 로 시작하는 이유는 i 의 숫자가 2 부터 시작을 하게 되고,
      // 2 * 2 = 4 가 출력이 된다. 그러므로 4는 2의 배수로 소수가 될 수 없기 때문에 0으로 지정한다.
      // 그 후 j 에 i 의 값을 더해서 올려주면 j 의 값은 + 2씩 증가하게 되고,
      // 아래의 함수는 처음엔 2의 배수를 만나면, 0으로 변환시켜주는 내용의 반복문이다.
      // 그 후, i 의 값이 증가하면서 3의 배수 / 4의 배수 / 5의 배수 ... 넘어가면서
      // 소수가 아닌 숫자들은 전부 0 으로 변환해주는 내용이 된다.
      for (let j = 2 * i; j <= numbers.length; j += i){
          console.log(`J = ${j}`)
          numbers[j] = 0;
      }
      console.log(`i의 숫자 : ${i} | 배열 : ${numbers}`)
  }

  // 위에서 걸러진 배열을 가지고와, i가 2부터 시작하는 반복문을 가지고온다.
  for(let i = 2; i < numbers.length; i++){
      // 만약 numbers[i]의 값이 0이 아니라면 answer의 배열에 넣어줘!
      if(numbers[i]!==0) answer.push(numbers[i])
  }
  
  // 그 후, answer의 길이를 출력하면 이 문제의 답이 출력이된다.
  return answer.length
}

console.log(solution(20))