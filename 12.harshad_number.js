// 항해99 - 프로그래머스 알고리즘 문제
// JavaScript - 12. 하샤드 수

/* [문제]
문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건
x는 1 이상, 10000 이하인 정수입니다.
입출력 예
arr	return
10	true
12	true
11	false
13	false
입출력 예 설명
입출력 예 #1
10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

입출력 예 #2
12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

입출력 예 #3
11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

입출력 예 #4
13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.*/

function solution(x) {
  let answer = '' // 결과 출력하기 위해 만들어진 변수
  let sum = 0 // for문을 돌며 배열의 index들이 합쳐지기 위해 만들어진 변수
  let num_type = typeof(x) // 입력된 x가 어떠한 타입으로 들어오는지 확인하기 위해 만든 변수

  console.log(num_type)

  let num_arr = x.toString().split('') // 위의 type을 콘솔에 찍어본 결과 숫자로 받는다는 걸 알아 스트링으로 변환 후 자름
  console.log(num_arr)

  for (i = 0; i < num_arr.length; i++) {
    // sum += Number(num_arr[i]) // 1+8
    sum = sum + Number(num_arr[i])
    // for문을 사용해 num_arr 안에 있는 인덱스들을 가져와 sum에 더해주는 형식으로 진행된다.
  }

  if(x % sum === 0) {
    return answer = true
  } else {
    return answer = false
  }
  // return (x % sum == 0) ? true:false;
}

console.log(solution(10))