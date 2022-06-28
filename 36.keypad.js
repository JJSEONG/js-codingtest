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