// 항해99 - 프로그래머스 알고리즘 문제
// JavaScript - 19. 문자열 내 마음대로 정렬하기

/* [문제]
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
입출력 예
strings	n	return
["sun", "bed", "car"]	1	["car", "bed", "sun"]
["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
입출력 예 설명
입출력 예 1
"sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

입출력 예 2
"abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.*/

function solution(strings, n) {
  var answer = [];
    
  answer =  strings.sort((a,b) => {
    // strings 의 인덱스의 값중 n 번째가 다음 비교할 b의 n 번째 보다 크다면, return 1 : 뒤로 보냄[오름차순]
    if(a[n] > b[n]) { return 1 }
    // strings 의 인덱스의 값중 n 번째가 다음 비교할 b의 n 번째 보다 작다면, return -1 : 앞으로 보냄[내림차순]
    if(a[n] < b[n]) { return -1 }
    // strings 의 인덱스의 값중 n 번째가 다음 비교할 b의 n 번째와 같다면 return 0 : a 와 b 비교하여 정렬
    // a > b : 성립되면 1이 리턴되어 오름차순
    // a < b : 성립되면 -1이 리턴되어 내림차순
    if(a[n] === b[n]) { return (a > b) - (a < b) }
  })
  console.log(strings)
  
  return answer;
}

console.log(solution(["sun", "bed", "car"], 1))