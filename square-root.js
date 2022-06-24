function solution(n) {
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
console.log(solution(12))