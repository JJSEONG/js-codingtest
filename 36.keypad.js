// 항해99 - 프로그래머스 알고리즘 문제
// JavaScript - 36. 키패드 누르기

/* [문제]
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

kakao_phone1.png

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

[제한사항]
numbers 배열의 크기는 1 이상 1,000 이하입니다.
numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
hand는 "left" 또는 "right" 입니다.
"left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
입출력 예
numbers	hand	result
[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"
입출력 예에 대한 설명
입출력 예 #1

순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.

왼손 위치	오른손 위치	눌러야 할 숫자	사용한 손	설명
*	#	1	L	1은 왼손으로 누릅니다.
1	#	3	R	3은 오른손으로 누릅니다.
1	3	4	L	4는 왼손으로 누릅니다.
4	3	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
5	3	8	L	왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.
8	3	2	R	왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.
8	2	1	L	1은 왼손으로 누릅니다.
1	2	4	L	4는 왼손으로 누릅니다.
4	2	5	R	왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.
4	5	9	R	9는 오른손으로 누릅니다.
4	9	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
5	9	-	-	
따라서 "LRLLLRLLRRL"를 return 합니다.

입출력 예 #2

왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.

입출력 예 #3

오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.*/

function solution(numbers, hand) {
    
  // 위치 찾아주는 함수
  function findKey(key) {
      let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
      for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
              if (keypad[i][j] === key) {
                  return [i, j];
              }
          }
      }
  }
  
  var answer = '';
  let left = '*';
  let right = '#';
  for (let i of numbers) {
      if (i === 1 || i === 4 || i === 7) {
          answer += 'L';
          left = i;
      }else if (i === 3 || i === 6 || i === 9) {
          answer += 'R';
          right = i - 2;
      }else {
          let r = findKey(right);
          let l = findKey(left);
          let middle = findKey(i);
          // 손위치와 눌러야할 키패드 거리 구하기
          let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
          let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
          if (rr === ll) { // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
              hand === 'right' ? (right = i, answer += 'R') : (left = i, answer += 'L');
          }else if(rr > ll) { // 오른손의 거리가 더 멀다면
              answer += 'L';
              left = i;
          }else { // 왼손의 거리가 더 멀다면
              answer += 'R';
              right = i;
          }
      }
  }
  
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))
/**
 * 직접 풀이한 내용 [이것 저것 보면서 참고하며 풀이함]
 */
function solution2(numbers, hand) {
  let answer = '';
  const keypad = {
    1: [1, 1], 2: [1, 2], 3: [1, 3],
    4: [2, 1], 5: [2, 2], 6: [2, 3],
    7: [3, 1], 8: [3, 2], 9: [3, 3],
    '*': [4, 1], 0: [4, 2], '#': [4, 3]
  }

  console.log(keypad)

  let cur_L = keypad['*']
  let cur_R = keypad['#']

  // console.log(cur_L, cur_R)

  for(let i = 0; i < numbers.length; i++) {
    let num = numbers[i]

    if(num === 1 || num === 4 || num === 7) {
      cur_L = keypad[num]
      console.log(`왼쪽 : ${cur_L}`)
      answer += 'L'
    } else if(num === 3 || num === 6 || num ===9) {
      cur_R = keypad[num]
      console.log(`오른쪽 : ${cur_R}`)
      answer += 'R'
    } else {
      // arr[a , b] arr2[a , b] => [aa - a2a] + [ab - a2b]  
      let left_dis = Math.abs((keypad[num][0] - cur_L[0])) + Math.abs((keypad[num][1] - cur_L[1]))
      let right_dis = Math.abs((keypad[num][0] - cur_R[0])) + Math.abs((keypad[num][1] - cur_R[1]))
      console.log(`왼쪽 : ${left_dis}, 오른쪽 : ${left_dis}`)

      if(left_dis === right_dis) {
        if(hand === "right") {
          cur_R = keypad[num]
          answer += "R"
        } else {
          cur_L = keypad[num]
          answer += "L"
        }
      } else if(left_dis < right_dis) {
        answer += 'L'
        cur_L = keypad[num]
      } else if(left_dis > right_dis) {
        answer += 'R'
        cur_R = keypad[num]
      }
    }
  }
  return answer
}

console.log(solution2([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))
// 내 풀이
// LRLRRLLLRRL

// 정답
// LRLLLRLLRRL