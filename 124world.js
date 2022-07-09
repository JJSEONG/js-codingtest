function solution(n) {
  var answer = '';

  let arr = ['4', '1', '2']

    while(n) {
      answer = arr[n%3] + answer; // 1
      console.log(`n의 값 : ${n}`)
      console.log(`answer: ${answer}`)
        // 0 == false
      n = n%3 === 0 ? n/3 -1 : Math.floor(n/3);
      console.log(`n의 값2 : ${n}`)
    }
     
    return answer;
}

console.log(solution(10))

  // if(n > 3) {
  //   if(n%3 === 0) {
  //     answer = n_arr[n%3]
  //     answer = Math.floor((n - 1) / 3) + answer
  //   } else if (n%3 === 1) { 
  //     answer = Math.floor(n/3) + n_arr[n%3]
  //   } else if (n%3 === 2) {
  //     answer = Math.floor(n/3) + n_arr[n%3]
  //   }
  // } else {
  //   if(n === 1) {
  //     answer = n_arr[n%3]
  //   } else if(n === 2) {
  //     answer = n_arr[n%3]
  //   } else if(n === 3) {
  //     answer = n_arr[n%3]
  //   }
  // }