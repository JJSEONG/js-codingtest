// 항해99 - 프로그래머스 알고리즘 문제
// JavaScript - 10. 제일 작은 수 제거하기

/* [문제]
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
입출력 예
arr	return
[4,3,2,1]	[4,3,2]
[10]	[-1]*/

// Sort 하면 안되는데 왜했을까 배열 순서 변환 금지
// 잘못된 풀이방법
function solution(arr) {
  let answer = []
  arr_sort = arr.sort((a,b) => b - a)
  // console.log(arr_sort)

  for(let i = 0; i < arr_sort.length; i++) {
    if(arr_sort.length > 1 ) {
      arr_sort.pop()
      answer = arr_sort
    } else {
      answer = [-1]
    }
    return answer
  }
  console.log(arr_sort)
}

function solution2(arr) {
  let answer = []

  // arr을 splice를 통해 삭제를 할건데 arr.indexOf(Math.min(...arr))의 위치부터 1개만 지워줘!
  // arr.indexOf(Math.min(...arr))
  // :: Math.min(...arr) = arr의 배열 안의 요소를 비교해 Math.min 함수를 통해 최소값을 찾아줘!
  // arr.indexOf() = arr배열에 괄호 안의 내용이 있으면 그 index 번호를 가르쳐줘!
  // arr.indexOf(Math.min(...arr)) :: arr의 최소값을 찾는데, 그 값의 index 번호를 가르쳐줘!
  arr.splice(arr.indexOf(Math.min(...arr)), 1)

  // min = Math.min(...arr)
  // index = arr.indexOf(min)
  // arr.splice(index, 1)

  answer = arr
  
  if(arr.length <= 1) {
    answer = [-1]
  }
  
  return answer
  console.log(arr)
}

console.log(solution([4, 3, 2, 1]))
console.log(solution2([10, 3, 8, 2, 4, 6]))